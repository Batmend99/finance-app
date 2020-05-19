// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

// Санхүүтэй ажиллах контроллер
var financeController = (function () {})();

// Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг");
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн конторллерт дамжуулж хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (
      event.keyCode === 13 ||
      /* Дээр үеийн browser - ууд дээр ажиллах*/ event.which === 13
    ) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
