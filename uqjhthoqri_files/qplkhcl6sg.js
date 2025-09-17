function bupi8axpnq() {
    const start = performance.now();
    debugger;
    if (performance.now() - start > 100) {
      return true;
    }
    setTimeout(bupi8axpnq, 1000);
  }
  bupi8axpnq();
  