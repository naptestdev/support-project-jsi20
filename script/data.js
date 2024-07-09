const tourLocations = [
  {
    name: "Tháp Eiffel, Paris, Pháp",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Pháp",
    days: 3,
    cost: 3200,
    description: "Tháp Eiffel là biểu tượng nổi tiếng của Paris, được xây dựng vào năm 1889 để chào mừng Triển lãm Thế giới. Với chiều cao 324 mét, tháp là một công trình kiến trúc kỳ vĩ và là một trong những điểm du lịch hấp dẫn nhất thế giới. Du khách có thể lên các tầng quan sát để ngắm nhìn toàn cảnh thành phố từ trên cao. Ban đêm, tháp được chiếu sáng rực rỡ, tạo nên một khung cảnh lung linh và lãng mạn. Xung quanh tháp là khu vực Champ de Mars xanh mướt, lý tưởng để dạo chơi và picnic. Các nhà hàng và cửa hàng lưu niệm dưới chân tháp cung cấp nhiều lựa chọn thú vị cho du khách."
  },
  {
    name: "Vách đá Machu Picchu, Peru",
    address: "Machu Picchu, Peru",
    days: 5,
    cost: 3000,
    description: "Machu Picchu là một di tích cổ của người Inca nằm trên đỉnh núi Andes, cao khoảng 2.430 mét so với mực nước biển. Được xây dựng vào thế kỷ 15 và bị lãng quên trong nhiều thế kỷ, Machu Picchu đã được tái phát hiện vào năm 1911. Nơi đây nổi tiếng với kiến trúc đá tinh xảo, các bậc thang dẫn lên các khu vực tôn giáo, khu sinh hoạt và nông nghiệp cổ đại. Du khách có thể khám phá khu vực này bằng cách đi bộ hoặc đi tàu từ thành phố Cusco. Cảnh quan hùng vĩ và không khí thanh bình của Machu Picchu làm cho nó trở thành một trong những điểm đến du lịch không thể bỏ qua trên thế giới."
  },
  {
    name: "Đại Phật Tượng, Kyoto, Nhật Bản",
    address: "473 Daibutsuchō, Higashiyama Ward, Kyoto, 605-0862, Nhật Bản",
    days: 2,
    cost: 1800,
    description: "Đại Phật Tượng ở Kyoto, còn được gọi là Daibutsu của Kōtoku-in, là một trong những tượng Phật lớn nhất Nhật Bản, cao hơn 15 mét. Tượng được đúc bằng đồng vào thế kỷ 13 và nằm trong khuôn viên chùa Kōtoku-in. Nơi đây là điểm đến yên bình và tôn nghiêm, thu hút nhiều du khách và tín đồ Phật giáo. Xung quanh tượng là những khu vườn và con đường nhỏ, tạo nên một không gian thanh tịnh và thư thái. Du khách có thể tham gia các nghi lễ Phật giáo, tham quan các ngôi chùa nhỏ và tận hưởng không khí yên bình của Kyoto."
  },
  {
    name: "Vịnh Hạ Long, Việt Nam",
    address: "Quảng Ninh, Việt Nam",
    days: 4,
    cost: 2200,
    description: "Vịnh Hạ Long là di sản thiên nhiên thế giới với hàng ngàn đảo đá vôi lớn nhỏ nhô lên từ mặt biển xanh biếc. Với hơn 1.600 hòn đảo và đảo nhỏ, vịnh tạo nên một khung cảnh kỳ diệu và huyền bí. Du khách có thể tham gia các tour du thuyền để khám phá các hang động kỳ thú như Hang Sửng Sốt, Động Thiên Cung, và Hang Đầu Gỗ. Ngoài ra, các hoạt động như bơi lội, chèo thuyền kayak và lặn biển cũng rất phổ biến. Vịnh Hạ Long còn là nơi lý tưởng để thưởng thức hải sản tươi ngon và trải nghiệm văn hóa địa phương. Với vẻ đẹp tuyệt mỹ, Vịnh Hạ Long là điểm đến không thể bỏ qua khi đến Việt Nam."
  },
  {
    name: "Đại Bảo Tháp, New Delhi, Ấn Độ",
    address: "Bharat Rashtra Sardar, Lutyens' Delhi, New Delhi, Delhi 110021, Ấn Độ",
    days: 3,
    cost: 1500,
    description: "Đại Bảo Tháp ở New Delhi là một công trình Phật giáo quan trọng, nơi lưu giữ nhiều di vật quý giá và tượng Phật lớn. Bảo tháp này tạo nên một không gian yên tĩnh và thanh bình, bao quanh bởi cây xanh và những con đường nhỏ dẫn du khách đến khám phá từng góc nhỏ. Kiến trúc độc đáo và lịch sử phong phú của bảo tháp thu hút nhiều du khách và tín đồ đến tham quan và hành hương. Tại đây, du khách có thể tìm hiểu về lịch sử và triết học Phật giáo, tham gia các buổi lễ và ngắm nhìn những tác phẩm nghệ thuật tinh xảo. Đại Bảo Tháp là một điểm đến tinh thần, mang lại cảm giác an lành và thanh tịnh cho mọi người."
  },
  {
    name: "Vườn Quốc Gia Yellowstone, Hoa Kỳ",
    address: "Wyoming, Montana, Idaho, Hoa Kỳ",
    days: 7,
    cost: 4000,
    description: "Vườn Quốc Gia Yellowstone là công viên quốc gia đầu tiên trên thế giới, được thành lập vào năm 1872. Nơi đây nổi tiếng với suối nước nóng, mạch nước phun và động vật hoang dã phong phú. Các điểm tham quan nổi bật bao gồm mạch nước phun Old Faithful, suối nước nóng Grand Prismatic và khu vực Grand Canyon of the Yellowstone. Du khách có thể tham gia các hoạt động như đi bộ đường dài, cắm trại, câu cá và ngắm nhìn các loài động vật như gấu, sói, nai và bò rừng. Với cảnh quan thiên nhiên hùng vĩ và đa dạng, Yellowstone là điểm đến lý tưởng cho những ai yêu thích khám phá và trải nghiệm thiên nhiên hoang dã."
  },
  {
    name: "Thành phố Cuzco, Peru",
    address: "Cuzco, Peru",
    days: 4,
    cost: 2800,
    description: "Cuzco, từng là thủ đô của đế chế Inca, hiện nay là một thành phố lịch sử với nhiều di tích văn hóa quan trọng. Quảng trường Plaza de Armas và các ngôi đền cổ như Sacsayhuamán và Qorikancha là những điểm nổi bật mà du khách không nên bỏ qua. Thành phố này nổi tiếng với kiến trúc đá tinh xảo, các con đường lát đá và bầu không khí cổ kính. Ngoài ra, Cuzco còn là cửa ngõ để đến Machu Picchu, di tích Inca nổi tiếng thế giới. Du khách có thể khám phá văn hóa địa phương, tham gia các lễ hội truyền thống và thưởng thức ẩm thực Peru độc đáo. Cuzco là một điểm đến không thể bỏ qua cho những ai yêu thích lịch sử và văn hóa."
  },
  {
    name: "Đại Kim Tự Tháp Giza, Ai Cập",
    address: "Al-Haram, Giza Governorate, Ai Cập",
    days: 3,
    cost: 2200,
    description: "Đại Kim Tự Tháp Giza là một trong bảy kỳ quan của thế giới cổ đại, được xây dựng vào khoảng năm 2580-2560 TCN. Đây là lăng mộ của Pharaoh Khufu, với kiến trúc đáng kinh ngạc và những bí ẩn chưa được giải đáp. Du khách có thể khám phá bên trong kim tự tháp, tham quan các khu vực xung quanh như Tượng Nhân Sư và các lăng mộ khác. Với cảnh quan sa mạc rộng lớn và những công trình kiến trúc vĩ đại, Giza mang lại một trải nghiệm lịch sử và văn hóa độc đáo. Tham quan khu di tích này sẽ giúp du khách hiểu thêm về nền văn minh Ai Cập cổ đại và những thành tựu kỳ diệu của họ."
  },
  {
    name: "Vịnh Halong, Việt Nam",
    address: "Quảng Ninh, Việt Nam",
    days: 4,
    cost: 2500,
    description: "Vịnh Hạ Long là điểm đến nổi tiếng với cảnh quan tuyệt đẹp, hang động kỳ thú và những đảo đá vôi lớn nhỏ. Với hơn 1.600 hòn đảo và đảo nhỏ, vịnh tạo nên một khung cảnh kỳ diệu và huyền bí. Du khách có thể tham gia các tour du thuyền để khám phá các hang động như Hang Sửng Sốt, Động Thiên Cung và Hang Đầu Gỗ. Ngoài ra, các hoạt động như bơi lội, chèo thuyền kayak và lặn biển cũng rất phổ biến. Vịnh Hạ Long còn là nơi lý tưởng để thưởng thức hải sản tươi ngon và trải nghiệm văn hóa địa phương. Với vẻ đẹp tự nhiên tuyệt mỹ, Vịnh Hạ Long là điểm đến không thể bỏ qua khi đến Việt Nam."
  },
  {
    name: "Thành phố Venice, Ý",
    address: "Venice, Ý",
    days: 3,
    cost: 3000,
    description: "Venice là một thành phố lãng mạn nằm trên một nhóm 118 đảo nhỏ giữa biển Adriatic. Với hệ thống các kênh đào và hơn 400 cây cầu, Venice được biết đến là một trong những điểm đến du lịch phổ biến nhất thế giới. Du khách có thể tắm nắng tại bãi biển Lido, tham quan quảng trường lớn Piazza San Marco với nhà thờ St. Mark's Basilica và Cung điện Ducal. Khám phá những hành lang hẹp của thành phố bằng gondola là một trải nghiệm không thể bỏ qua, nơi du khách có thể chiêm ngưỡng kiến trúc lâu đài và ngắm nhìn những ngôi nhà đầy màu sắc."
  },
  {
    name: "Đại Bảo Tháp Angkor, Campuchia",
    address: "Siem Reap, Campuchia",
    days: 5,
    cost: 2800,
    description: "Đại Bảo Tháp Angkor, nằm gần Siem Reap ở Campuchia, là một trong những kỳ quan kiến trúc của thế giới. Angkor Wat là trung tâm của một quần thể di tích lịch sử, bao gồm nhiều ngôi đền và công trình kiến trúc cổ. Du khách có thể tham quan các công trình kiến trúc đáng kinh ngạc như ngôi đền Bayon với những tượng đá quan hà, và Ta Prohm nổi tiếng với cây banyan đan chặt trên tường đá. Khu vực xung quanh Angkor là nơi du khách có thể khám phá các ngôi làng truyền thống và tìm hiểu về lịch sử văn hóa đặc sắc của Campuchia."
  },
  {
    name: "Thành phố Santorini, Hy Lạp",
    address: "Santorini, Hy Lạp",
    days: 4,
    cost: 3500,
    description: "Santorini là một hòn đảo nổi tiếng thuộc quần đảo Cyclades ở biển Aegean với kiến trúc đặc trưng là những ngôi nhà trắng với mái vòm xanh. Thành phố Fira và Oia nổi tiếng với khung cảnh hoàng hôn đẹp như tranh, cùng với những dãy nhà bên dốc vách núi lửa. Du khách có thể tham quan các di tích lịch sử như Thành đồng và những khu vực khác của đảo để khám phá văn hóa Hy Lạp. Với những bãi biển xanh biếc và ẩm thực đa dạng, Santorini là điểm đến lý tưởng cho những ai muốn tận hưởng không khí nghỉ dưỡng và thư giãn."
  },
  {
    name: "Công viên Quốc gia Serengeti, Tanzania",
    address: "Serengeti National Park, Tanzania",
    days: 7,
    cost: 5000,
    description: "Công viên Quốc gia Serengeti là một trong những khu bảo tồn động vật hoang dã lớn nhất và nổi tiếng nhất thế giới, nằm ở phía bắc Tanzania. Công viên nổi tiếng với cuộc di cư hàng năm của hàng triệu động vật như linh dương, voi và sư tử. Du khách có thể tham gia safari qua đồng cỏ Serengeti để quan sát động vật hoang dã trong môi trường tự nhiên của chúng. Ngoài ra, công viên cũng có nhiều hồ nước và thác nước, tạo nên những cảnh quan thiên nhiên hùng vĩ và đa dạng, làm hài lòng các nhà nghiên cứu thiên nhiên và những ai yêu thích môi trường hoang sơ."
  },
  {
    name: "Thành phố Dubrovnik, Croatia",
    address: "Dubrovnik, Croatia",
    days: 3,
    cost: 2800,
    description: "Dubrovnik, còn được gọi là 'Hòn ngọc của Biển Adriatic', là một trong những thành phố cổ lịch sử và văn hóa nổi tiếng ở Croatia. Với thành cổ lấp lánh, các con đường đá cổ và những khu nhà cổ đẹp mắt, Dubrovnik thu hút du khách từ khắp nơi trên thế giới. Du khách có thể tham quan những điểm nổi bật như thành cổ cùng những ngôi nhà bằng đá cổ xưa. Thành phố còn nổi tiếng với văn hóa nghệ thuật và lễ hội truyền thống, mang đến cho du khách những trải nghiệm văn hóa đặc sắc."
  },
  {
    name: "Đại Phật Tượng, Bắc Kinh, Trung Quốc",
    address: "Badaling, Yanqing District, Beijing, Trung Quốc",
    days: 2,
    cost: 1500,
    description: "Đại Phật Tượng ở Bắc Kinh là biểu tượng văn hóa và tôn giáo của Trung Quốc. Nổi tiếng với tượng Phật khổng lồ đúc từ đồng, cao 13,2 mét và nặng khoảng 250 tấn, đây là một trong những tượng Phật lớn nhất thế giới. Du khách đến thăm có thể tìm hiểu về lịch sử và nghệ thuật điêu khắc đá của Trung Quốc, cũng như chiêm ngưỡng tượng Phật đầy nghi lễ trong một không gian yên bình với nhiều cây cối và ao hồ xung quanh."
  },
  {
    name: "Đại Kim Tự Tháp Chichen Itza, Mexico",
    address: "Chichen Itza, Yucatán, Mexico",
    days: 3,
    cost: 2200,
    description: "Đại Kim Tự Tháp Chichen Itza là một di sản thế giới nổi tiếng tại Mexico. Xây dựng bởi người Maya vào thế kỷ 9, Kim Tự Tháp là một tòa tháp cao 30 mét với cấu trúc kiến trúc độc đáo. Du khách có thể khám phá các di tích lịch sử như Bảo tàng Kim Tự Tháp, Cung điện Las Monjas và Cầu vồng nổi tiếng. Chichen Itza còn là nơi diễn ra Lễ hội Tết của Người Maya mỗi năm, thu hút khách du lịch từ khắp nơi trên thế giới."
  },
  {
    name: "Thành phố Venice, Ý",
    address: "Venice, Ý",
    days: 3,
    cost: 3000,
    description: "Venice là một thành phố lãng mạn nằm trên một nhóm 118 đảo nhỏ giữa biển Adriatic. Với hệ thống các kênh đào và hơn 400 cây cầu, Venice được biết đến là một trong những điểm đến du lịch phổ biến nhất thế giới. Du khách có thể tắm nắng tại bãi biển Lido, tham quan quảng trường lớn Piazza San Marco với nhà thờ St. Mark's Basilica và Cung điện Ducal. Khám phá những hành lang hẹp của thành phố bằng gondola là một trải nghiệm không thể bỏ qua, nơi du khách có thể chiêm ngưỡng kiến trúc lâu đài và ngắm nhìn những ngôi nhà đầy màu sắc."
  },
  {
    name: "Đại Bảo Tháp Angkor, Campuchia",
    address: "Siem Reap, Campuchia",
    days: 5,
    cost: 2800,
    description: "Đại Bảo Tháp Angkor, nằm gần Siem Reap ở Campuchia, là một trong những kỳ quan kiến trúc của thế giới. Angkor Wat là trung tâm của một quần thể di tích lịch sử, bao gồm nhiều ngôi đền và công trình kiến trúc cổ. Du khách có thể tham quan các công trình kiến trúc đáng kinh ngạc như ngôi đền Bayon với những tượng đá quan hà, và Ta Prohm nổi tiếng với cây banyan đan chặt trên tường đá. Khu vực xung quanh Angkor là nơi du khách có thể khám phá các ngôi làng truyền thống và tìm hiểu về lịch sử văn hóa đặc sắc của Campuchia."
  },
  {
    name: "Thành phố Santorini, Hy Lạp",
    address: "Santorini, Hy Lạp",
    days: 4,
    cost: 3500,
    description: "Santorini là một hòn đảo nổi tiếng thuộc quần đảo Cyclades ở biển Aegean với kiến trúc đặc trưng là những ngôi nhà trắng với mái vòm xanh. Thành phố Fira và Oia nổi tiếng với khung cảnh hoàng hôn đẹp như tranh, cùng với những dãy nhà bên dốc vách núi lửa. Du khách có thể tham quan các di tích lịch sử như Thành đồng và những khu vực khác của đảo để khám phá văn hóa Hy Lạp. Với những bãi biển xanh biếc và ẩm thực đa dạng, Santorini là điểm đến lý tưởng cho những ai muốn tận hưởng không khí nghỉ dưỡng và thư giãn."
  },
  {
    name: "Công viên Quốc gia Serengeti, Tanzania",
    address: "Serengeti National Park, Tanzania",
    days: 7,
    cost: 5000,
    description: "Công viên Quốc gia Serengeti là một trong những khu bảo tồn động vật hoang dã lớn nhất và nổi tiếng nhất thế giới, nằm ở phía bắc Tanzania. Công viên nổi tiếng với cuộc di cư hàng năm của hàng triệu động vật như linh dương, voi và sư tử. Du khách có thể tham gia safari qua đồng cỏ Serengeti để quan sát động vật hoang dã trong môi trường tự nhiên của chúng. Ngoài ra, công viên cũng có nhiều hồ nước và thác nước, tạo nên những cảnh quan thiên nhiên hùng vĩ và đa dạng, làm hài lòng các nhà nghiên cứu thiên nhiên và những ai yêu thích môi trường hoang sơ."
  }
]