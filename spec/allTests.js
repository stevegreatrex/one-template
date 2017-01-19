//locate all ts or tsx files in this and sub folders, then require each one.  tricks
//webpack into including all tests even though they don't share a common entry point
const req = require.context(".", true, /^(.*\.(tsx?$))[^.]*$/igm);
req.keys().forEach(req);