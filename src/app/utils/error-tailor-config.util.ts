import { provideErrorTailorConfig } from '@ngneat/error-tailor';

export const provideCustomErrorTailorConfig = () =>
  provideErrorTailorConfig({
    errors: {
      useValue: {
        required: 'This field is required',
        minlength: ({ requiredLength, actualLength }) =>
          `Expect ${requiredLength} but got ${actualLength}`,
        invalidAddress: (error) => `Address isn't valid ${error}`,
      },
    },
  });
