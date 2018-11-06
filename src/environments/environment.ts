// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  storeAddress: '0xff8150272c20c3b926ef6b7bed9c83ab2916494f',
  storeABI: [
    {
        'constant': false,
        'inputs': [
            {
                'name': 'fingerprint',
                'type': 'bytes'
            },
            {
                'name': 'price',
                'type': 'uint256'
            }
        ],
        'name': 'add',
        'outputs': [
            {
                'name': '_fingerprint',
                'type': 'bytes'
            }
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'fingerprint',
                'type': 'bytes'
            }
        ],
        'name': 'buy',
        'outputs': [
            {
                'name': '_fingerprint',
                'type': 'bytes'
            }
        ],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'fingerprint',
                'type': 'bytes'
            }
        ],
        'name': 'getPrice',
        'outputs': [
            {
                'name': '_price',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'fingerprint',
                'type': 'bytes'
            }
        ],
        'name': 'proveBuy',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'fingerprint',
                'type': 'bytes'
            }
        ],
        'name': 'proveOwnership',
        'outputs': [
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }
  ]
};
