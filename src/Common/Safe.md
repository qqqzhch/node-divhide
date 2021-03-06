

Safe facility provides an API that can helps you safelly working with javascript data types. This methods
are supposed to work with different value types.

**Methods**

* `Safe.array(value, defaultValue?)`
<br />
Gets the value in the array representation. __defaultValue__ is returned if defined and if value is not
an array.

* `Safe.boolean(value, defaultValue?)`

* `Safe.string(value, defaultValue?)`

* `Safe.object(value, defaultValue?)`

* `Safe.number(value, defaultValue?)`

* `Safe.function(value, defaultValue?)`

* `Safe.value(value, defaultValue?)`

* `Safe.regexp(value, defaultValue)`

* `Safe.instanceOf(value, Class)`
<br />
Gets an instance of the given value if is an instance of the given Class, otherwise it will
create an instance.

* `Safe.length(value)`
<br />
Gets the length of the value.

* `Safe.coerce(value, expected)`
Gets the value coerced by the expected value type.

**Example** Array

```js

{%= _.include("Safe/SafeArrayExample.js") %}

```

**Example** Boolean

```js

{%= _.include("Safe/SafeBooleanExample.js") %}

```

**Example** Function

```js

{%= _.include("Safe/SafeFunctionExample.js") %}

```

**Example** Length

```js

{%= _.include("Safe/SafeLengthExample.js") %}

```

**Example** Number

```js

{%= _.include("Safe/SafeNumberExample.js") %}

```

**Example** Object

```js

{%= _.include("Safe/SafeObjectExample.js") %}

```

**Example** Regex

```js

{%= _.include("Safe/SafeRegexExample.js") %}

```

**Example** String

```js

{%= _.include("Safe/SafeStringExample.js") %}

```

**Example** Value

```js

{%= _.include("Safe/SafeValueExample.js") %}

```
