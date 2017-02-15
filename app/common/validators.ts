import { FormControl, ValidatorFn } from '@angular/forms';

export function restrictedWordsValidator(restrictedWords: string[]): ValidatorFn {
    return (control: FormControl): { [key: string]: any } => {
        if (!restrictedWords || restrictedWords.length === 0) {
            return null;
        }

        let matchedWords: string[] = restrictedWords.filter(w => (<string>control.value).includes(w));

        if (matchedWords && matchedWords.length > 0)
            return { 'restrictedWordsValidator': matchedWords.join(', ') };

        return null;

    };
}
