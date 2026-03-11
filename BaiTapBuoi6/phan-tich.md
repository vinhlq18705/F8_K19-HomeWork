Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?

- ID Selector có độ ưu tiên cao nhất trong CSS

Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?

#main sẽ thắng vì nó là ID selecter có điểm ưu tiên cao nhất trong đây(h1 (Element Selector):1đ .title (Class Selector):
10đ
#main (ID Selector):100đ )

Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?

Kết quả sẽ là màu của nó sẽ là màu "pink" màu của inline style vì inline style là kiểu có độ ưu tiên cao nhất

Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?

Điều kiện để override thành công là

+ thẻ link của theme.css phải đứng sau thẻ link của base.css
+ trong theme.css độ ưu tiên selector cao hơn của base.css

Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.

Tại vì trong dự án cùng class .title nhưng một tag có thêm ID nêm dựa theo độ ưu tiên thì một cái sẽ theo màu của
id selector môt cái theo màu của title class nên màu hiển thị khác nhau

Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích
selector nào thắng cuối cùng.

phần tử  <h1 id="special" class="title" style="color:red">DASHBOARD</h1> có css phức tạp nhất
các selector tác động lên nó là tag(h1) + class(.title)+ id(#special)+ internal + external + inline style
inline style thắng vì nó có độ ưu tiên cao nhất
nếu bỏ qua không phân tích iinternal + external + inline style thì ID selector có tác động lớn nhất vì nó có trọng số
lớn nhất trong (id,class,tag )selector
Màu hiển thị là màu đỏ




