// Shield desativado: sem anti-clonagem, sem trava de domínio, sem banimento automático.
// Mantém a mesma API (SR) para o resto do jogo continuar funcionando.
const noop = () => {};
export const SR = {
    blocked: false,
    locked: false,
    owner: true,
    banId: '',
    score: 0,
    codes: () => [],
    flag: noop,
    watch: noop,
    tick: noop,
    checkModuleUrl: noop,
    fingerprint: () => Promise.resolve(''),
    now: () => performance.now(),
    forceLock: noop,
    onBlock: noop,
    onLock: noop,
    takeReport: () => null,
    peekReport: () => null
};
