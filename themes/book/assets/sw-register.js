// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
{{- $swJS := resources.Get "sw.js" | resources.ExecuteAsTemplate "sw.js" . -}}
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "{{ $swJS.RelPermalink }}", 
    { scope: "{{ "/" | relURL }}" }
  );
}
