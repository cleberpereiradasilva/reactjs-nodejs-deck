
module.exports = {
    roots: ["<rootDir>/src", "<rootDir>/pages"],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/pages/**/*/js'],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: "node",
    transform: {
        '.+\\.ts$' : 'ts-jest'
    },
};
