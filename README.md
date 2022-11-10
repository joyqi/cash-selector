# cash-selector

Cash Selector is a simple querySelector and querySelectorAll wrapper.
It wraps the native querySelector and querySelectorAll methods to provide a more convenient way to select elements.

## Installation

```bash
npm install cash-selector
```

## Usage

```typescript
import { $, $$ } from 'cash-selector';

const element = $('#my-element');
const elements = $$('.my-elements');
```

You can also specify a generic type to get the correct type of the element.

```typescript
import { $, $$ } from 'cash-selector';

const element = $<HTMLDivElement>('#my-element');
const elements = $$<HTMLDivElement>('.my-elements');
```

Parent element can be specified as the second argument.

```typescript
import { $, $$ } from 'cash-selector';

const element = $('#my-element', '#parent-element');
const elements = $$('.my-elements', '#parent-element');
```