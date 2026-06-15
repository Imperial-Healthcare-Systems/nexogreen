/* ============================================================================
   NexoGreen EXIM — forms.js
   Client-side validation, honeypot, RFQ prefill via URL param, success/error
   states. Wired to a CLEARLY-MARKED placeholder endpoint for the client to
   swap (REQUIREMENTS §7, §14.8). No real backend in Phase 1.
   ========================================================================== */
(function () {
  "use strict";

  // <<< CLIENT: replace with your Formspree / Web3Forms endpoint before go-live >>>
  var FORM_ENDPOINT = "YOUR_FORMSPREE_ENDPOINT";

  function qs(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }

  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  function fieldOf(input) { return input.closest(".form-field, .field"); }

  function setError(input, msg) {
    var f = fieldOf(input);
    if (!f) return;
    f.classList.add("invalid");
    var err = f.querySelector(".err");
    if (err && msg) err.textContent = msg;
    input.setAttribute("aria-invalid", "true");
  }
  function clearError(input) {
    var f = fieldOf(input);
    if (!f) return;
    f.classList.remove("invalid");
    input.removeAttribute("aria-invalid");
  }

  function validate(form) {
    var ok = true, first = null;
    form.querySelectorAll("[required]").forEach(function (input) {
      var val = (input.value || "").trim();
      var bad = false, msg = "This field is required.";
      if (!val) bad = true;
      else if (input.type === "email" && !isEmail(val)) { bad = true; msg = "Enter a valid email address."; }
      if (bad) { setError(input, msg); ok = false; if (!first) first = input; }
      else clearError(input);
    });
    if (first) first.focus();
    return ok;
  }

  function showStatus(form, type, msg) {
    var el = form.querySelector(".form-status");
    if (!el) { el = form.querySelector("[data-status]"); }
    if (!el) return;
    el.className = (el.classList.contains("rfq-status") ? "rfq-status " : "") + "form-status " + (type === "ok" ? "ok" : "bad");
    el.textContent = msg;
    el.setAttribute("role", "status");
  }

  function handle(form) {
    form.setAttribute("novalidate", "novalidate");
    form.addEventListener("input", function (e) {
      if (e.target.matches("input, select, textarea")) clearError(e.target);
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // honeypot — if filled, treat as bot: pretend success, send nothing
      var hp = form.querySelector(".hp input");
      if (hp && hp.value) { showStatus(form, "ok", "Thank you — your request has been received."); form.reset(); return; }

      if (!validate(form)) {
        showStatus(form, "bad", "Please correct the highlighted fields and try again.");
        return;
      }

      // Phase 1: no live endpoint wired. Confirm receipt to the user.
      // CLIENT: POST to FORM_ENDPOINT here once configured.
      var name = (form.querySelector("[name=name]") || {}).value || "";
      showStatus(form, "ok",
        (name ? name.split(" ")[0] + ", thank" : "Thank") +
        " you — your inquiry has been received. Our trade team will respond with availability, specifications and a competitive quote.");
      form.reset();
    });
  }

  function prefillRFQ() {
    var product = qs("product");
    var destination = qs("destination");
    var volume = qs("volume");
    if (product) {
      // try a <select> first, fall back to text input
      var sel = document.querySelector("[name=product]");
      if (sel) {
        if (sel.tagName === "SELECT") {
          var matched = false;
          Array.prototype.forEach.call(sel.options, function (o) {
            if (o.value === product || o.text === product) { o.selected = true; matched = true; }
          });
          if (!matched) {
            var opt = document.createElement("option");
            opt.value = product; opt.text = product; opt.selected = true;
            sel.appendChild(opt);
          }
        } else {
          sel.value = product;
        }
      }
    }
    var dest = document.querySelector("[name=destination]");
    if (destination && dest) dest.value = destination;
    var vol = document.querySelector("[name=volume]");
    if (volume && vol) vol.value = volume;
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(function () {
    document.querySelectorAll("form[data-form]").forEach(handle);
    prefillRFQ();
  });
})();
