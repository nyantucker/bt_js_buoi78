var numberArr = []


function themSo() {
    var number=document.querySelector("#number").value*1
    numberArr.push(number);
    console.log(numberArr);
    var daySo = `<`+numberArr[0] +`>`
    for (var i = 1 ; i < numberArr.length ; i++ ) {
        daySo = daySo + ` <` + numberArr[i]+`>`;   
    }
    console.log(daySo);
    document.getElementById("day-so").innerHTML = `${daySo}`
}

function tinhTongDuong() {
    tongDuong = 0;
    numberArr.forEach(function(item){
        if (item >0) {
            tongDuong = tongDuong + item
        }
    })
    Swal.fire({
        title: 'Tổng số dương',
        text: `${tongDuong}`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })
}

function demSoDuong() {
    count = 0
    numberArr.forEach(function(item){
        if (item > 0) {
            count++
        }
    })
    Swal.fire({
        title: 'Số lượng số dương',
        text: `${count}`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })
}

function soNhoNhat() {
    min = numberArr[0];
    numberArr.forEach(function(item){
        if (min > item) {
            min = item
        }
    })
    Swal.fire({
        title: 'Số nhỏ nhất',
        text: `${min}`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })
}

function soDuongNhoNhat() {
    var daySoDuong = numberArr.filter(function(item){
        return item >0
    })
    var minDuong = daySoDuong[0]
    for (var i=0 ; i < daySoDuong.length ; i++) {
        if (minDuong > daySoDuong[i]) {
            minDuong = daySoDuong[i]
        } 
    }
    if (daySoDuong.length < 1) {
        Swal.fire({
            title: 'Số dương nhỏ nhất',
            icon: `error`,
            text: `Không có số dương`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
         } else {
        Swal.fire({
            title: 'Số dương nhỏ nhất',
            text: `${minDuong}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
        
    }
}

function soChanCuoi() {
    var soChanCuoi
    for (var i=0; i < numberArr.length ; i++) {
        if (numberArr[i]%2 == 0) {
            soChanCuoi = numberArr[i];
        }
    }
    if (soChanCuoi == undefined) {
        Swal.fire({
            title: 'Số chẵn cuối',
            icon: `error`,
            text: `-1`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    } else {
    Swal.fire({
        title: 'Số chẵn cuối',
        text: `${soChanCuoi}`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })
    }
}

function doiCho2So() {
    var doicho = document.getElementById("doi-cho");
    if (doicho.style.display === "none") {
        doicho.style.display = "block";
    } else {
        doicho.style.display = "none";
    }
    document.getElementById("doi-cho").classList.add("animate__fadeIn")
}

function doiCho() {
    var index1 = document.getElementById("vi-tri-1").value*1-1;
    var index2 = document.getElementById("vi-tri-2").value*1-1;
    if (index1 > numberArr.length || index2 > numberArr.length) {
        Swal.fire({
            title: 'Nhập sai vị trí',
            icon: `error`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    }  else {
        var giaTri1 = numberArr[index1];
        var giaTri2 = numberArr[index2];
        numberArr[index2] = giaTri1;
        numberArr[index1] = giaTri2;
        Swal.fire({
            title: 'Dãy số đổi chỗ',
            text: `${numberArr} `,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
        // Trả lại array
        numberArr[index1] = giaTri1;
        numberArr[index2] = giaTri2;
    }
}

function sapXepTang() {
    for ( var i = 0 ; i < numberArr.length ; i++) {
        for (var k = 0 ; k < numberArr.length ; k++) {
            if (numberArr[i] < numberArr [k]) {
                var t = numberArr[i];
                numberArr[i] = numberArr[k]
                numberArr[k] = t
            }
        }
    }
    Swal.fire({
        title: 'Dãy số tăng dần',
        text: `${numberArr} `,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })
}

function soNguyenTo() {
    // Điều kiện số dương lớn hơn 1
    var dayNguyenDuong = numberArr.filter(function(item){
        if (Number.isInteger(item) == true && item >=2) {
            return item
        }
    })
    var dayNguyenTo = []
    for (var i = 0; i < dayNguyenDuong.length; i++) {
        var check = 0;
        for (var k =2 ; k < dayNguyenDuong[i]; k++) {
            if (dayNguyenDuong[i] % k == 0) {
                check = 1;
            }
        }
        if (check == 0) {
            dayNguyenTo.push(dayNguyenDuong[i])
        }
    }
    if (dayNguyenTo.length < 1) {
        Swal.fire({
            title: 'Không có số nguyên tố',
            icon: `error`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    } else {
        Swal.fire({
            title: 'Số nguyên tố đầu tiên',
            text: `${dayNguyenTo[0]} `,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    }
}

function demSoNguyen() {
    count = 0;
    numberArr.forEach(function(item){
        if (Number.isInteger(item) == true) {
            count++;
        }
    })
    Swal.fire({
        title: 'Số lượng số nguyên',
        text: `${count}`,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      })
}

function soSanhAmDuong() {
    var soAm = 0;
    var soDuong = 0;
    numberArr.forEach(function(item){
        if (item <0) {
            soAm++;
        } else if (item>0) {
            soDuong++
        }
    })
    if (soAm < soDuong){
        Swal.fire({
            title: 'Số Âm < Số Dương',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    } else if (soAm > soDuong) {
        Swal.fire({
            title: 'Số Âm > Số Dương',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    } else {
        Swal.fire({
            title: 'Số Âm = Số Dương',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          })
    }
}