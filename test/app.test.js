
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const projectDir = path.join(__dirname, '..');

test('Homepage exists', () => {
    assert.equal(
        fs.existsSync(path.join(projectDir, 'index.html')),
        true
    );
});

test('Login page exists', () => {
    assert.equal(
        fs.existsSync(path.join(projectDir, 'login.html')),
        true
    );
});

test('Registration page exists', () => {
    assert.equal(
        fs.existsSync(path.join(projectDir, 'register.html')),
        true
    );
});

test('Dashboard page exists', () => {
    assert.equal(
        fs.existsSync(path.join(projectDir, 'dashboard.html')),
        true
    );
});

test('Express server is configured', () => {
    const server = fs.readFileSync(
        path.join(projectDir, 'server.js'),
        'utf8'
    );

    assert.match(server, /require\(['"]express['"]\)/);
});
