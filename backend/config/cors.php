<?php

return [

    'paths' => ['api/*', 'reports'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],  // or your specific frontend: ['http://localhost:3000']

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
