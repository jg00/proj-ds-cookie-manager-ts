## Simple Cookie Manager

Simple cookie manager

![PyPI - Status](https://img.shields.io/pypi/status/Django?style=for-the-badge)

## Install

Download cookie-manager.js and include in your project.

```html
<script src="cookie-manager.js"></script>
```

## Handle Cookies With Care

### Create

```js
CookieManager.set(name, value, expires, domain, path, secure);
```

- `name` cookie name required
- `value` cookie value requied
- `expires` optional
- `domain` optional
- `path` optional
- `secure` optional

### Update

```js
CookieManager.update(name, value, expires, domain, path, secure);
```

### Remove

```js
CookieManager.remove(name);
```

### List All

```js
CookieManager.getAll();
```

### List One

```js
CookieManager.get(name);
```

### Clear All

```js
CookieManager.clear();
```

## Author

[jg00](https://github.com/jg00)
