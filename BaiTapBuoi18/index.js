// Bài 1

// const student = {
//     name: 'hoang',
//     parent: {
//         name: 'bo hoang'
//     }
// }
//
// const mentor = { ...student }
//
// mentor.name = 'bang'
// mentor.parent.name = 'bo bang'
//
// console.log(student)
// console.log(mentor)

// student.name không bị thay đổi vì name là kiểu dữ liệu nguyên thủy (string).
// Khi thực hiện copy nông (shallow copy), giá trị này được sao chép độc lập, không phải tham chiếu,
// nên khi thay đổi mentor.name sẽ không ảnh hưởng đến student.name

// student.parent.name có bị thay đổi bởi vì  student.parentlà kiểu dữ liệu object
// Khi thực hiện copy nông(shallow copy), giá trị này được tham chiếu nên khi thay đổi mentor.parent.name sẽ ảnh hưởng đến student.parent.name

// Bai2

// const student = {
//     name: 'hoang',
//     parent: {
//         name: 'bo hoang'
//     }
// }
//
// const mentor = JSON.parse(JSON.stringify(student))
//
// mentor.parent.name = 'bo bang'
//
// console.log(student)
// console.log(mentor)

//student.parent.name không bị ảnh hưởng bởi vì đang sử dụng copy sâu nên Toàn bộ object sẽ tạo mới hoàn toàn trong bộ nhớ
//cách này khác spread (const mentor = { ...student }) vì spread chỉ copy lớp ngoài cùng nhân thành dữ liệu mới còn object bên trong
// sẽ chỉ tham chiếu đến chứ k cop thành dự liệu mới
// cách bài này sử dụng là copy sâu(deep copy) toàn bộ object sẽ được tạo mới hoàn toàn trong bộ nhớ

// bài 3

// const students = [
//     { name: 'a' },
//     { name: 'b' }
// ]
//
// const newStudents = [...students]
//
// newStudents[0].name = 'z'
//
// console.log(students)
// console.log(newStudents)

// Mảng không thay đổi về cấu trúc nhưng object trong mảng bị thay đổi
// Vì mảng chứa các object, và khi dùng spread ([...]) thì chỉ copy mảng ở mức nông (shallow copy),
// nên các phần tử bên trong vẫn là tham chiếu đến cùng object.
// Do đó khi thay đổi newStudents[0].name, object gốc trong students cũng bị thay đổi.


// bài 4

const user = {
    name: 'hoang',
    address: {
        city: 'HN',
        location: {
            lat: 123
        }
    }
}

const newUser = { ...user }

newUser.address.location.lat = 999

console.log(user.address.location.lat)

//Kết quả là 999
// Bởi vì  đây đang sử dụng (shallow copy) nên  newUser.address.location.lat đang tham chiếu về user.address.location.lat
// Nên khi sửa ở newUser.address.location.lat thì  user.address.location.lat cũng sẽ bị thay đổi


