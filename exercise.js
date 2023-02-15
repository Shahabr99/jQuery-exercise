//Part One
$("document").ready(function () {
  console.log("Let's get ready to party with jQuery!");
  $("img").addClass("image-center");
  $("article p").last().remove();
  const random = Math.floor(Math.random() * 100);

  $("h1").css("font-size", random);
  $("<li>Sometimes all I think about is youuuu😎</li>").appendTo("ol");
  $("aside")
    .empty()
    .append("p")
    .text("The list was a mistake. I apologize for the inconvenience🙏");
  $("div input").on("keyup", function () {
    const arr = $("input").get();

    const r = arr[0].value;
    const g = arr[1].value;
    const b = arr[2].value;
    $("body").css("background-color", `rgb(${r},${g},${b})`);
  });
  $("img").on("click", function () {
    $(this).fadeOut(function () {
      $(this).remove();
    });
  });
});
