# How to use
``` sh
node mongoFixer.js fileName.json "id":
```

This would replace every **"id":** with **"_id":** allowing any (unique) filed to be used as \_id (mongo import does not generate a \_id field this way
and export the result to fileName_fixed.json.
