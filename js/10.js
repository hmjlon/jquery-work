$(document).ready(function(){
  let data = [
    { name: "장원영", age: 21 },
    { name: "안유진", age: 22 },
    { name: "리즈", age: 21 },
    { name: "레이", age: 22 },
    { name: "이서", age: 18 },
    { name: "가을", age: 23 },
  ];

  $("#forLoop").on("click", function () {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      result =
        result +
        `
        <tr>
          <td>${i + 1}</td>
          <td>${data[i].name}</td>
          <td>${data[i].age}</td>
        </tr>
  `;
    }
    $("#forOut").html(result);
  });
})