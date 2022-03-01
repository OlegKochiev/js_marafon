// что выведет код ниже

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// Вывод будет: 1.

// Второй вызов resolve будет проигнорирован, поскольку учитывается только первый вызов reject/resolve. Все последующие вызовы – игнорируются.