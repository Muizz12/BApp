import {makeVar} from '@apollo/client';

interface Token {
  token: string;
}

export const userToken = makeVar<string | undefined | null>(undefined);

export const productname = makeVar<string | undefined | null>(undefined);

export const globalError = makeVar<{message: string} | undefined>(undefined);
