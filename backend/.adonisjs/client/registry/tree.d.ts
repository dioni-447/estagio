/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    show: typeof routes['profile.show']
  }
  accessTokens: {
    destroy: typeof routes['access_tokens.destroy']
  }
  mensagens: {
    index: typeof routes['mensagens.index']
    store: typeof routes['mensagens.store']
  }
}
