declare const time: {
   /**
   Catapimbas

   @example
   ```
   import time = require('mask-wizard')

   time('210')
   //=> '2h10m

   ```
   */
   (timeInput: string, maxLength: string | number): string
   default: typeof time
}

export = time;