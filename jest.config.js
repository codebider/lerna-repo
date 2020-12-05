module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    collectCoverageFrom: ['./src/**/*.ts'],
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json'
        }
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 50
        }
    }
};