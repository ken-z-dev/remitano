export type SwapToken = {
  "version": "0.1.0",
  "name": "swap_token",
  "instructions": [
    {
      "name": "initToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mintAuthorityPubkey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "decimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthorityPubkey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "adminWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "solPayed",
          "type": "u64"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InitTokenErr",
      "msg": "init new token has err"
    }
  ]
};

export const IDL: SwapToken = {
  "version": "0.1.0",
  "name": "swap_token",
  "instructions": [
    {
      "name": "initToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mintAuthorityPubkey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "decimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "swapToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthorityPubkey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "adminWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "solPayed",
          "type": "u64"
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InitTokenErr",
      "msg": "init new token has err"
    }
  ]
};
