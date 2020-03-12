---
title: "books"
---

some books that i enjoy, in no particular order

{{ range $.Site.Data.books }}
   {{ partial "book.html" . }}
{{ end }}
