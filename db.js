const db = {
  category: [
    {idx: 1, name: '커피 (샷)'},
    {idx: 2, name: 'non 커피 라떼'},
    {idx: 3, name: '차'},
    {idx: 4, name: '에이드, 모히또'},
    {idx: 5, name: '스무디, 프라페, 퐁 크러쉬'},
    {idx: 6, name: '주스'},
    {idx: 7, name: '콜드브루'},
    {idx: 8, name: '흑당 (버블) 라떼'},
  ],
  data: [
    {
      idx: 1,
      name: '아메리카노',
      category: 1,
      ref: [2, 3, 4, 31],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20)', '뜨거운 물(8부, 425ml)', '샷 투입'
        ],
      },
      ice: {
        recipe: [
          '추출(2샷)', '컵(24)', '얼음가득', '물(9부, 275ml)', '샷',
        ],
      },
    },
    {
      idx: 2,
      name: '꿀 아메리카노',
      category: 1,
      ref: [1],
      hot: {
        recipe: [
          '샷잔(꿀 2래들, 샷잔 1/4선)', '추출(2샷)', '컵(20)', '뜨거운 물(8부, 425ml)', '(꿀 섞은) 샷 투입',
        ],
      },
      ice: {
        recipe: [
          '샷잔(꿀 2래들, 샷잔 1/4선)', '추출(2샷)', '컵(24) (얼음 (가득), 물(8.5부, 250ml))', '샷(+꿀) 섞어 투입', '섞음'
        ],
      },
    },
    {
      idx: 3,
      name: '헤이즐넛 아메리카노',
      category: 1,
      ref: [1],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20)', '(헤이즐넛) 시럽(3P)', '뜨거운 물(8부, 400ml)', '(시럽 + 물)섞음', '샷 투입',
        ],
      },
      ice: {
        recipe: [
          '샷잔(헤이즐넛 시럽 4P)', '추출(2샷)', '컵(24) (얼음 (가득), 물(8.5부, 250ml))', '샷(+시럽) 섞어 투입', '섞음'
        ],
      },
    },
    {
      idx: 4,
      name: '바닐라 아메리카노',
      category: 1,
      ref: [1],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20)', '(바닐라) 시럽(3P)', '뜨거운 물(8부, 400ml)', '(시럽 + 물)섞음', '샷 투입',
        ],
      },
      ice: {
        recipe: [
          '샷잔(바닐라 시럽 4P)', '추출(2샷)', '컵(24) (얼음 (가득), 물(8.5부, 250ml))', '샷(+시럽) 섞어 투입', '섞음'
        ],
      }
    },
    {
      idx: 5,
      name: '카페라떼',
      category: 1,
      ref: [8, 9, 10, 13, 32],
      hot: {
        recipe: [
          '추출(2샷)', '스팀(우유 275ml)', '컵(20)', '샷 투입', '스팀우유 (투입)',
        ],
      },
      ice: {
        recipe: [
          '추출(2샷)', '컵(20) (얼음 (가득), 우유(8부, 225ml))', '샷 (투입)',
        ],
      }
    },
    {
      idx: 6,
      name: '카푸치노',
      category: 1,
      ref: [],
      hot: {
        recipe: [
          '추출(2샷)', '스팀(우유 225ml)', '컵(20)', '샷 투입', '스팀우유 투입', '토핑(시나몬 파우더) (선택)',
        ],
      },
      ice: {
        recipe: [
          '아이스폼', '추출(2샷)', '컵(20) (얼음 컵선)', '우유(카푸치노 윗선, 150ml)', '샷 (투입)', '우유폼(40g) 투입', '토핑(시나몬 파우더) (선택)',
        ],
      },
    },
    {
      idx: 7,
      name: '카라멜마끼아또',
      category: 1,
      ref: [],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20)', '(카라멜) 시럽(3P)', '스팀 우유(250ml)', '((우유+시럽) 섞음)', '샷', '토핑(카라멜소스 드리즐)',
        ],
      },
      ice: {
        recipe: [
          '아이스폼', '샷잔((카라멜시럽) 시럽 4P)', '추출(2샷)', '컵(얼음 컵선)', '우유(카푸치노 윗선, 150ml)', '우유폼 (2스푼, 40g) 투입', '샷(+시럽) 섞어 투입', '토핑(카라멜소스 드리즐)',
        ],
      },
    },
    {
      idx: 8,
      name: '바닐라 라떼',
      category: 1,
      ref: [5, 9],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20)', '(바닐라) 시럽(3P)', '스팀 우유(250ml)', '샷((샷+시럽) 섞음)', '스팀 우유 (투입)',
        ],
      },
      ice: {
        recipe: [
          '샷잔((바닐라) 시럽 4P)', '추출(2샷)', '컵(20) (얼음 (가득), 우유(아메리카노 윗선, 200ml))', '샷(+시럽) 섞어 투입', '((샷+시럽)+우유) 섞음',
        ],
      },
    },
    {
      idx: 9,
      name: '헤이즐넛 라떼',
      category: 1,
      ref: [5, 8],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20)', '(헤이즐넛) 시럽(3P)', '스팀 우유(250ml)', '샷((샷+시럽) 섞음)', '스팀 우유 (투입)',
        ],
      },
      ice: {
        recipe: [
          '샷잔((헤이즐넛) 시럽 4P)', '추출(2샷)', '컵(20) (얼음 (가득), 우유(아메리카노 윗선, 200ml))', '샷(+시럽) 섞어 투입', '((샷+시럽)+우유) 섞음',
        ],
      },
    },
    {
      idx: 10,
      name: '연유라떼',
      category: 1,
      ref: [5],
      hot: {
        recipe: [
          '샷잔(연유 2래들, 샷잔 1/4선), (슈가) 시럽 1P)', '샷 추출(2샷)', '스팀(우유 250ml)', '샷((샷 + 연유 + 시럽)섞음)', '컵(20) (컵에 샷)투입', '스팀 우유 (투입)',
        ],
      },
    },
    {
      idx: 11,
      name: '카페모카',
      category: 1,
      ref: [12],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20) (초코 파우더 2래들)', '샷 투입((샷 + 파우더) 섞음)', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(휘핑크림 30g, 초코소스 드리즐)',
        ],
      },
      ice: {
        recipe: [
          '추출(2샷)', '컵(20)', '(초코) 베이스 75ml (컵 밑선)', '얼음 (컵선)', '우유(아메리카노 윗선, 125ml)', '샷 (투입)', '(샷+우유) 섞음', '토핑(휘핑크림 30g, 초코드리즐)',
        ],
      },
    },
    {
      idx: 12,
      name: '민트카페모카',
      category: 1,
      ref: [11],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20) (민트 시럽 3P, 초코 파우더 2래들)', '샷 투입((샷 + 시럽 + 파우더) 섞음)', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(민트휘핑크림 30g, 딸기 크런치)',
        ],
      },
      ice: {
        recipe: [
          '추출(2샷)', '컵(20)', '민트시럽 3P, (초코) 베이스 45ml (컵 밑선)', '얼음 (컵선)', '우유(아메리카노 윗선, 125ml)', '샷 (투입)', '(샷+우유) 섞음', '토핑(민트 휘핑크림 30g, 딸기 크런치)',
        ],
      },
    },
    {
      idx: 13,
      name: '티라미수 라떼',
      category: 1,
      ref: [5],
      hot: {
        recipe: [
          '추출(2샷)', '컵(20) (티라미수소스 1P, 슈가시럽 1P)', '샷((샷 + 소스 + 시럽) 섞음)', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(티라미수크림 3스푼(침지), 코코아파우더)',
        ],
      },
      ice: {
        recipe: [
          '샷잔((티라미수) 소스 1.5P, (슈가) 시럽 1P)', '추출(2샷)', '컵(20) (얼음 컵선, 우유(카푸치노 윗선, 150ml))', '샷 섞어 투입', '섞음', '토핑(티라미수크림(가득/50g), 코코아 파우더)',
        ],
      },
    },
    {
      idx: 14,
      name: '녹차라떼',
      category: 2,
      ref: [],
      hot: {
        recipe: [
          '컵(20)(녹차 파우더 2래들)', '뜨거운 물(50ml)', '(파우더 + 물)섞음', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(녹차파우더)'
        ],
      },
      ice: {
        recipe: [
          '컵(20) ((녹차) 베이스 75ml(컵 밑선), 얼음(가득), 우유(가득, 225ml))', '(베이스+우유) 섞음',
        ],
      },
    },
    {
      idx: 15,
      name: '로얄밀크티',
      category: 2,
      ref: [],
      hot: {
        recipe: [
          '컵(20)(홍차 파우더 2래들)', '뜨거운 물(50ml)', '(파우더 + 물)섞음', '스팀(우유 250ml)', '스팀우유 (투입)',
        ],
      },
      ice: {
        recipe: [
          '믹서기(우유 200ml, (홍차) 파우더 2래들)','믹서(3번)', '컵(20)(얼음 (가득))', '부어줌',
        ],
      },
    },
    {
      idx: 16,
      name: '초코',
      category: 2,
      ref: [17],
      hot: { // 핫초코
        recipe: [
          '컵(20) (초코 파우더 4래들)', '뜨거운 물(50ml)', '(파우더 + 물)섞음', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(코코아 파우더)'
        ],
      },
      ice: { // 아이스초코
        recipe: [
          '컵(20) ((초코) 베이스 130ml (ETC 윗선), 얼음(가득), 우유(가득, 150ml))', '(베이스+우유) 섞음',
        ],
      },
    },
    {
      idx: 17,
      name: '메가초코',
      category: 2,
      ref: [16],
      hot: {
        recipe: [
          '컵(20) (초코 파우더 4래들)', '뜨거운 물(50ml)', '(파우더 + 물)섞음', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(휘핑 30g, 초코 카라멜 드리즐, 딸기 크런치)',
        ],
      },
      ice: {
        recipe: [
          '컵(20) ((초코) 베이스 130ml (ETC 윗선), 얼음(가득), 우유(9부, 125ml))', '(베이스+우유) 섞음', '토핑(휘핑크림 30g, 초코 카라멜 드리즐, 딸기 크런치)'
        ],
      }
    },
    {
      idx: 18,
      name: '민트크림초코',
      category: 2,
      ref: [16],
      hot: {
        recipe: [
          '컵(20) (민트시럽 3P, 초코 파우더 1.5래들)', '뜨거운 물(50ml)', '(파우더 + 물)섞음', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(민트휘핑크림 30g, 딸기 크런치)',
        ],
      },
      ice: {
        recipe: [
          '컵((민트) 시럽 3P, (초코) 베이스 45ml(컵 밑선), 얼음(컵선), 우유(9부, 175ml))', '(시럽 + 베이스 + 우유) 섞음', '토핑(민트 휘핑크림 30g, 딸기 크런치)'
        ]
      }
    },
    {
      idx: 19,
      name: '토피넛 라떼',
      category: 2,
      ref: [],
      hot: {
        recipe: [
          '컵(20) (토피넛 파우더 4래들)', '뜨거운 물 50ml', '(파우더 + 물)섞음', '스팀(우유 250ml)', '스팀우유 (투입)', '토핑(카라멜소스 드리즐)',
        ],
      },
      ice: {
        recipe: [
          '믹서기(우유 250ml, (토피넛) 파우더 4래들)','믹서(3번)', '컵(20)(얼음 (가득))', '부어줌',
        ],
      },
    },
    {
      idx: 20,
      name: '고구마 라떼',
      category: 2,
      ref: [],
      hot: {
        recipe: [
          '컵(20) (고구마 페이스트 1스쿱, 슈가시럽 1P)', '스팀(80도, 275ml)', '스팀우유(우유만)', '(고구마 + 시럽 + 우유)섞음', '(스팀우유)폼 (투입)', '토핑(아몬드 슬라이스)',
        ],
      },
      ice: {
        recipe: [
          '믹서기(우유 200ml, 고구마 페이스트 1스쿱, 슈가시럽 1P)','믹서(3번)', '컵(20)(얼음 (가득))', '부어줌',
        ],
      },
    },
    {
      idx: 21,
      name: '곡물 라뗴',
      category: 2,
      ref: [],
      hot: {
        recipe: [
          '컵(20) (오곡 파우더 4래들, 슈가시럽 1P)', '스팀(275ml)', '스팀우유(우유만)', '(파우더 + 시럽 + 우유)섞음', '(스팀우유)폼 (투입)', '토핑(아몬드 슬라이스)',
        ],
      },
      ice: {
        recipe: [
          '믹서기(우유 250ml, (슈가) 시럽 1P, (오곡) 파우더 4래들)','믹서(3번)', '컵(20)(얼음 (가득))', '부어줌',
        ],
      },
    },
    {
      idx: 22,
      name: '얼그레이',
      category: 3,
      ref: [23, 24, 25],
      hot: {
        recipe: [
          '컵(20) (얼그레이 티백 1ea)', '뜨거운 물(9부, 475ml)',
        ],
      },
      ice: {
        recipe: [
          '계량컵((얼그레이) 티백 2ea + 뜨거운물 150ml', '3분우리기', '컵(얼음 반컵)', '우려진 물 투입', '얼음 (가득)', '물 (가득)', '토핑(민트 잎)'
        ],
      },
    },
    {
      idx: 23,
      name: '캐모마일',
      category: 3,
      ref: [22, 24, 25],
      hot: {
        recipe: [
          '컵(20) (캐모마일 티백 1ea)', '뜨거운 물(9부, 475ml)',
        ],
      },
      ice: {
        recipe: [
          '계량컵((캐모마일) 티백 2ea + 뜨거운물 150ml', '3분우리기', '컵(24) (얼음 반컵)', '우려진 물 투입', '얼음 (가득)', '물 (가득)', '토핑(민트 잎)'
        ],
      },
    },
    {
      idx: 24,
      name: '페퍼민트',
      category: 3,
      ref: [22, 23, 25],
      hot: {
        recipe: [
          '컵(20) (페퍼민트 티백 1ea)', '뜨거운 물(9부, 475ml)',
        ],
      },
      ice: {
        recipe: [
          '계량컵((페퍼민트) 티백 2ea + 뜨거운물 150ml', '3분우리기', '컵(24) (얼음 반컵)', '우려진 물 투입', '얼음 (가득)', '물 (가득)', '토핑(민트 잎)'
        ],
      },
    },
    {
      idx: 25,
      name: '녹차',
      category: 3,
      ref: [22, 23, 24],
      hot: {
        recipe: [
          '컵(20) (현미녹차 티백 1ea)', '뜨거운 물(9부, 475ml)',
        ],
      },
      ice: {
        recipe: [
          '계량컵((녹차) 티백 2ea + 뜨거운물 150ml', '3분우리기', '컵(24) (얼음 반컵)', '우려진 물 투입', '얼음 (가득)', '물 (가득)', '토핑(민트 잎)'
        ],
      },
    },
    {
      idx: 26,
      name: '유자차',
      category: 3,
      ref: [27, 28, 30],
      hot: {
        recipe: [
          '컵(20) (유자청 5래들)', '뜨거운 물(9부, 375ml)',
        ],
      },
      ice: {
        recipe: [
          '컵(24) ((유자)청 6래들, 뜨거운 물 50ml)', '(청+물) 섞음', '얼음(가득)', '물 (가득, 150ml)', '섞음', '토핑(민트 잎)'
        ],
      },
    },
    {
      idx: 27,
      name: '레몬차',
      category: 3,
      ref: [26, 28],
      hot: {
        recipe: [
          '컵(20) (레몬청 5래들)', '뜨거운 물(9부, 375ml)', '토핑(레몬슬라이스 1ea)',
        ],
      },
      ice: {
        recipe: [
          '컵(24) ((레몬)청 6래들, 뜨거운 물 50ml)', '(청+물) 섞음', '얼음(가득)', '물 (가득, 150ml)', '섞음', '토핑(레몬슬라이스 1ea, 민트 잎)'
        ],
      },
    },
    {
      idx: 28,
      name: '자몽차',
      category: 3,
      ref: [26, 27, 29],
      hot: {
        recipe: [
          '컵(20) (자몽청 4래들, 슈가시럽 2P)', '뜨거운 물(9부, 375ml)', '토핑(자몽슬라이스 1ea (4등분))',
        ],
      },
      ice: {
        recipe: [
          '컵(24) ((자몽)청 4래들, 슈가 시럽 1P, 뜨거운 물 50ml)', '(청+시럽+물) 섞음', '얼음(가득)', '물 (가득, 150ml)', '섞음', '토핑(자몽슬라이스 1ea, 민트 잎)'
        ],
      }
    },
    {
      idx: 29,
      name: '허니자몽블랙티',
      category: 3,
      ref: [28, 30],
      hot: {
        recipe: [
          '컵(20) (자몽청 3래들, 꿀 1래들)', '뜨거운 물(9부, 375ml)', '얼그레이 티백 1ea', '토핑(자몽슬라이스 1ea (4등분))',
        ],
      },
      ice: {
        recipe: [
          '계량컵(얼그레이 티백 1ea, 뜨거운 물 75ml)', '3분우리기', '컵(24) (자몽청 3래들, 꿀 1래들)', '티백 우린 물 투입', '(우린물+청+꿀) 섞음', '얼음(가득)', '물(가득, 125ml)', '((우린물+청+꿀)+물)섞음', '티백 넣어주기', '토핑(자몽슬라이스 1ea, 민트 잎, 티백)',
        ],
      },
    },
    {
      idx: 30,
      name: '사과유자차',
      category: 3,
      ref: [26, 29],
      hot: {
        recipe: [
          '컵(20) (유자청 4래들)', '뜨거운 물(9부, 375ml)', '애플 티백 1ea',
        ],
      },
      ice: {
        recipe: [
          '계량컵(애플 티백 1ea, 뜨거운 물 75ml)', '3분우리기', '컵(24) (자몽청 4래들)', '티백 우린 물 투입', '(우린물+청+꿀) 섞음', '얼음(가득)', '물(가득, 125ml)', '((우린물+청+꿀)+물)섞음', '티백 넣어주기', '토핑(자몽슬라이스 1ea, 민트 잎, 티백)',
        ],
      },
    },
    {
      idx: 31,
      name: '메가리카노',
      category: 1,
      ref: [1],
      ice: {
        recipe: [
          '추출(3샷)', '컵(32) (얼음 (가득)), 물(9부, 400ml))', '샷 (투입)',
        ],
      }
    },
    {
      idx: 35,
      name: '큐브 라떼',
      category: 1,
      ref: [5],
      ice: {
        recipe: [
          '샷잔(연유 2래들, 샷잔 1/4선)', '추출(2샷)', '컵(20) (얼음 (컵선), 우유(아메리카노 윗선, 200ml))', '샷(+연유) 섞어 투입', '((샷+연유)+우유) 섞음', '토핑(에스프레소 큐브 2ea)'
        ],
      },
    },
    {
      idx: 36,
      name: '딸기 라떼',
      category: 2,
      ref: [],
      ice: {
        recipe: [
          '컵(20) ((가당)딸기 200ml, 슈가시럽 3P, 가위 컷팅)', '얼음 (가득)', '우유(우유가득, 125ml)', '(딸기+시럽+우유)섞음',
        ],
      },
    },
    {
      idx: 37,
      name: '오레오초코라떼',
      category: 2,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 200ml, (초코) 베이스 50ml, 오레오 과자 3ea)','믹서(3번, *5초)', '컵(20)(얼음 (컵선))', '흔들어서 부어줌', '토핑(휘핑크림 30g, 오레오 1ea, 쿠키분태)',
        ],
      },
    },
    {
      idx: 38,
      name: '복숭아 아이스티',
      category: 3,
      ref: [],
      ice: {
        recipe: [
          '컵(24) (아이스티 베이스 125ml, 가맹문의 밑선)', '얼음(가득)', '물(가득, 175ml)', '(물+베이스) 섞음', '토핑(민트 잎)',
        ],
      },
    },
    {
      idx: 39,
      name: '체리콕',
      category: 4,
      ref: [],
      ice: {
        recipe: [
          '컵(24) (체리 베이스 100ml, 컵 밑선)', '얼음(가득)', '콜라(가득, 250ml)', '(베이스+콜라) 섞음', '토핑(민트 잎)',
        ],
      },
    },
    {
      idx: 40,
      name: '레몬에이드',
      category: 4,
      ref: [41, 42],
      ice: {
        recipe: [
          '컵(24) (레몬 퓨레 1.5P, (슈가) 시럽 1P)', '얼음(가득)', '사이다(가득, 250ml)', '(퓨레+시럽+사이다) 섞음', '토핑(레몬 슬라이스 1ea, 민트 잎)',
        ],
      },
    },
    {
      idx: 41,
      name: '블루 레몬에이드',
      category: 4,
      ref: [40],
      ice: {
        recipe: [
          '컵(24) (레몬 퓨레 1.5P, (블루큐라소) 시럽 2P)', '얼음(가득)', '사이다(가득, 250ml)', '(퓨레+시럽+사이다) 섞음', '토핑(레몬 슬라이스 1ea, 민트 잎)',
        ],
      },
    },
    {
      idx: 42,
      name: '자몽에이드',
      category: 4,
      ref: [40, 43],
      ice: {
        recipe: [
          '컵(24) (자몽 퓨레 1P, (자몽) 시럽 1P, (슈가) 시럽 1P)', '얼음(가득)', '사이다(가득, 250ml)', '(퓨레+시럽+사이다) 섞음', '토핑(자몽 슬라이스 1ea, 민트 잎)',
        ],
      },
    },
    {
      idx: 43,
      name: '청포도에이드',
      category: 4,
      ref: [40, 42],
      ice: {
        recipe: [
          '컵(24) (청포도 퓨레 2P, (라임) 시럽 1P)', '얼음(가득)', '사이다(가득, 250ml)', '(퓨레+시럽+사이다) 섞음', '토핑(민트 잎)',
        ],
      },
    },
    {
      idx: 44,
      name: '메가에이드',
      category: 4,
      ref: [],
      ice: {
        recipe: [
          '컵(24) (메가 퓨레 2P, (라임) 베이스 85ml, 과일(후르티자몽 1P, 자몽 1ea(4등분), 레몬 2ea, 라임 2ea))', '빻아줌', '얼음(가득)', '사이다(가득, 200ml)', '(퓨레+베이스+빻은과일+사이다) 섞음', '토핑(민트 잎)',
        ],
      },
    },
    {
      idx: 45,
      name: '라임모히또',
      // 퓨레 안들어가는데?
      category: 4,
      ref: [46, 47],
      ice: {
        recipe: [
          '컵(24) (라임 시럽 3P, 모히또 시럽 4P, 과일(라임 슬라이스 4ea), 민트 잎 4ea)', '빻아줌', '얼음(가득)', '사이다(가득, 250ml)', '(시럽+빻은과일+사이다) 섞음',
        ],
      },
    },
    {
      idx: 46,
      name: '자몽모히또',
      category: 4,
      ref: [45, 47],
      ice: {
        recipe: [
          '컵(24) (자몽 퓨레 2P, 자몽 시럽 2P, 모히또 시럽 1P, 라임 시럽 2P 과일(라임 2ea), 민트 잎 4ea)', '빻아줌', '얼음(가득)', '사이다(가득, 250ml)', '(퓨레+시럽+빻은과일+사이다) 섞음', '토핑(자몽 슬라이스 1ea)',
        ],
      },
    },
    {
      idx: 47,
      name: '청포도모히또',
      category: 4,
      ref: [45, 46],
      ice: {
        recipe: [
          '컵(24) (청포도 퓨레 1P, 모히또 시럽 1P, 라임 시럽 2P, 과일(라임 2ea), 민트 잎 4ea)', '빻아줌', '얼음(가득)', '사이다(가득, 250ml)', '(퓨레+시럽+빻은과일+사이다) 섞음',
        ],
      },
    },
    {
      idx: 48,
      name: '매직에이드(블루)',
      category: 4,
      ref: [49],
      ice: {
        recipe: [
          '컵(블루큐라소 시럽 2P, 모히또 시럽 1P, 라임 시럽 2P)', '얼음(가득)', '사이다(9부, 200ml)', '토핑(레몬 슬라이스 1ea, 민트 잎, 그라데이션베이스 75ml) (섞음X)',
        ],
      },
    },
    {
      idx: 49,
      name: '매직에이드(핑크)',
      category: 4,
      ref: [48],
      ice: {
        recipe: [
          '컵(레몬퓨레 1.5P)', '얼음(가득)', '사이다(9부, 200ml)', '토핑(레몬 슬라이스 1ea, 민트 잎, 그라데이션베이스 75ml) (섞음X)',
        ],
      },
    },
    {
      idx: 50,
      name: '플레인요거트스무디',
      category: 5,
      ref: [51, 52],
      ice: {
        recipe: [
          '믹서기(우유 200ml, 요거트 파우더 6래들, 슈가 시럽 1P, 얼음(가득)))', '믹서(3번)', '컵(20) (부어줌)',
        ],
      },
    },
    {
      idx: 51,
      name: '망고요거트스무디',
      category: 5,
      ref: [50, 52],
      ice: {
        recipe: [
          '믹서기(우유 150ml, 요거트 파우더 3래들, 망고소스 1P, 해동망고 10ea, 얼음(가득)))', '믹서(3번)', '컵(20) (부어줌)',
        ],
      },
    },
    {
      idx: 52,
      name: '딸기요거트스무디',
      category: 5,
      ref: [50, 51, 53],
      ice: {
        recipe: [
          '믹서기(우유 150ml, 요거트 파우더 3래들, 가당딸기 150ml, 슈가 시럽 1P, 얼음(가득)))', '믹서(3번)', '컵(20) (부어줌)',
        ],
      },
    },
    {
      idx: 53,
      name: '스트로베리치즈홀릭',
      category: 5,
      ref: [52],
      ice: {
        recipe: [
          '믹서기(우유 150ml, 요거트 파우더 3래들, 가당딸기 150ml, 슈가 시럽 1P, 얼음(가득)))', '믹서(3번)', '컵(20) (부어줌)', '토핑(휘핑 30g, 치즈큐브 6ea, 딸기 크런치)',
        ],
      },
    },
    {
      idx: 54,
      name: '쿠키프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기 (쿠키 베이스 250ml, 칩(쿠키분태 3래들), 얼음(가득))', '믹서(3번)', '컵(20) (부어줌)', '토핑(휘핑 30g, 오레오 2ea(컷팅), 쿠키분태)',
        ],
      },
    },
    {
      idx: 55,
      name: '민트프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기 (민트 베이스 250ml, 칩(초콜릿칩 1래들), 얼음(가득))', '믹서(3번)', '컵(20) (부어줌)', '토핑(민트 휘핑 30g, 딸기 크런치)',
        ],
      },
    },
    {
      idx: 56,
      name: '리얼초코프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기 (쿠키 베이스 100ml, 초코 베이스 150ml, 칩(초콜릿칩 1래들), 얼음(가득))', '믹서(3번)', '컵(20) (부어줌)', '토핑(휘핑 30g, 초코, 카라멜 드리즐, 딸기 크런치)',
        ],
      },
    },
    {
      idx: 57,
      name: '녹차프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기 (쿠키 베이스 125ml, 녹차 베이스 125ml, 얼음(가득))', '믹서(3번)', '컵(20) (부어줌)', '토핑(휘핑 30g, 녹차 파우더)',
        ],
      },
    },
    {
      idx: 58,
      name: '커피프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기 (쿠키 베이스 200ml, 식힌 샷 50ml, 얼음(가득))', '믹서(3번)', '컵(20) (부어줌)', '토핑(휘핑 30g, 식힌 샷, 카라멜소스 드리즐)',
        ],
      },
    },
    {
      idx: 59,
      name: '딸기쿠키프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기 (우유 100ml, 쿠키 베이스 100ml, 얼음(컵선)))', '믹서(3번)', '컵(20) 바닥 쿠키분태(2래들)', '믹서(딸기소스(2P) 마블링 생기도록 저어줌)', '컵(20) (부어줌)', '토핑(휘핑 30g, 쿠키분태)',
        ],
      },
    },
    {
      idx: 60,
      name: '유니콘프라페',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 100ml, 쿠키 베이스 100ml, 그라데이션 파우더 2래들, 얼음)', '믹서(3번)', '컵(20) (8부선에 블루소스 드리즐)', '(믹서 후) 반만 부어줌', '레몬쥬스', '부어줌', '토핑(휘핑 30g, 레몬쥬스, 그라데이션 파우더)',
        ],
      },
    },
    {
      idx: 61,
      name: '플레인퐁크러쉬',
      category: 5,
      ref: [62, 63],
      ice: {
        recipe: [
          '믹서기(우유 100ml, 쿠키 베이스 150ml, 퐁(1컵), 슈가 시럽 2P, 얼음(가득))', '믹서(3번)', '컵(20) (컵 밑선, 죠리퐁(7g))', '부어줌', '토핑(죠리퐁 가득(약 20g))',
        ],
      },
    },
    {
      idx: 62,
      name: '바나나퐁크러쉬',
      category: 5,
      ref: [61, 63],
      ice: {
        recipe: [
          '믹서기(우유 100ml, 쿠키 베이스 150ml, 퐁(1컵), 슈가 시럽 2P, 바나나 파우더 2래들, 얼음(가득))', '믹서(3번)', '컵(20) (컵 밑선, 죠리퐁(7g))', '부어줌', '토핑(죠리퐁 가득(약 20g))',
        ],
      },
    },
    {
      idx: 63,
      name: '딸기퐁크러쉬',
      category: 5,
      ref: [61, 62],
      ice: {
        recipe: [
          '믹서기(우유 100ml, 쿠키 베이스 150ml, 퐁(1컵), 딸기 소스 1P, 얼음(가득))', '믹서(3번)', '컵(20) (컵 밑선, 죠리퐁(7g))', '부어줌', '토핑(죠리퐁 가득(약 20g))',
        ],
      },
    },
    {
      idx: 64,
      name: '플레인허니퐁크러쉬',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 100ml, 쿠키 베이스 150ml, 허니퍼프시리얼(50ml), 곡물 파우더 1래들, 얼음(가득))', '믹서(3번)', '컵(20)', '부어줌', '토핑(허니퍼프 가득(약 20g))',
        ],
      },
    },
    {
      idx: 65,
      name: '슈크림허니퐁크러쉬',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 150ml, 쿠키 베이스 100ml, 허니퍼프시리얼(50ml), 슈크림 파우더 3래들, 얼음(가득))', '믹서(3번)', '컵(20)', '부어줌', '토핑(허니퍼프 가득(약 20g))',
        ],
      },
    },
    {
      idx: 66,
      name: '초코허니퐁크러쉬',
      category: 5,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 150ml, 쿠키 베이스 100ml, 허니퍼프시리얼(50ml), 초코 파우더 2래들, 얼음(가득))', '믹서(3번)', '컵(20)', '부어줌', '토핑(허니퍼프 가득(약 20g))',
        ],
      },
    },
    {
      idx: 67,
      name: '오곡바나나주스',
      category: 6,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 200ml, 설탕 베이스 25ml, 오곡 파우더 3래들, 과일(바나나 1ea))', '믹서(3번)', '컵(20) (얼음(8부))', '부어줌',
        ],
      },
    },
    {
      idx: 68,
      name: '초코바나나주스',
      category: 6,
      ref: [],
      ice: {
        recipe: [
          '믹서기(우유 150ml, 초코 베이스 100ml, 바나나 파우더 1래들, 과일(바나나 1ea))', '믹서(3번)', '컵(20) (얼음(8부))', '부어줌',
        ],
      },
    },
    {
      idx: 69,
      name: '딸기바나나주스',
      category: 6,
      ref: [70],
      ice: {
        recipe: [
          '믹서기(우유 100ml, 과일(가당 딸기 180ml), 바나나 1ea)', '믹서(3번)', '컵(20) (얼음(8부))', '부어줌',
        ],
      },
    },
    {
      idx: 70,
      name: '딸기주스',
      category: 6,
      ref: [69],
      ice: {
        recipe: [
          '믹서기(물 100ml, 과일(가당 딸기 250ml))', '믹서(3번)', '컵(20) (얼음(8부))', '부어줌',
        ],
      },
    },
    {
      idx: 71,
      name: '콜드브루 오리지날',
      category: 7,
      ref: [72],
      hot: {
        recipe: [
          '계량컵(콜드브루 원액 100ml)', '컵(20)', '뜨거운 물(400ml)'
        ],
      },
      ice: {
        recipe: [
          '컵(20)', '콜드브루 원액 75ml(컵 밑선)', '얼음(가득)', '물(가득, 225ml)', '(원액+물) 섞음',
        ],
      },
    },
    {
      idx: 72,
      name: '콜드브루 라떼',
      category: 7,
      ref: [71],
      hot: {
        recipe: [
          '계량컵(콜드브루 원액 100ml)', '컵(20)', '스팀(*80도, 우유 250ml)', '스팀우유 (투입)',
        ],
      },
      ice: {
        recipe: [
          '컵(20)', '콜드브루 원액 75ml(컵 밑선)', '얼음(가득)', '우유(가득, 225ml)', '(원액+우유) 섞음',
        ],
      },
    },
    {
      idx: 73,
      name: '흑당버블 라떼',
      category: 8,
      ref: [74, 75],
      ice: {
        recipe: [
          '펄 스팀(펄 1스쿱, 뜨거운 물 코 밑(약 250ml)', '컵(20) (흑당 베이스 2P, 물기 제거한 펄)', '컵 (옆면 위주로) 돌려주기', '얼음(가득)', '우유(가득, 250ml)',
        ],
      },
    },
    {
      idx: 74,
      name: '흑당버블 밀크티라떼',
      category: 8,
      ref: [73],
      ice: {
        recipe: [
          '펄 스팀(펄 1스쿱, 뜨거운 물 코 밑(약 250ml)', '컵(20) (흑당 베이스 2P, 물기 제거한 펄)', '컵 (옆면 위주로) 돌려주기', '컵(밀크티 시럽 1P)', '얼음(가득)', '우유(가득, 250ml)',
        ],
      },
    },
    {
      idx: 75,
      name: '흑당버블 그린티라떼',
      category: 8,
      ref: [73],
      ice: {
        recipe: [
          '펄 스팀(펄 1스쿱, 뜨거운 물 코 밑(약 250ml)', '컵(20) (흑당 베이스 2P, 물기 제거한 펄)', '컵 (옆면 위주로) 돌려주기', '얼음(가득)', '계량컵(녹차베이스 50ml, 우유(150ml))', '(베이스+우유)섞음', '컵(부어줌)',
        ],
      },
    },
    {
      idx: 76,
      name: '흑당 라떼',
      category: 8,
      ref: [77],
      ice: {
        recipe: [
          '컵(흑당 베이스 3P)', '컵 (옆면 위주로) 돌려주기', '얼음(가득)', '우유(가득, 250ml)',
        ],
      },
    },
    {
      idx: 77,
      name: '흑당 밀크티라떼',
      category: 8,
      ref: [76],
      ice: {
        recipe: [
          '컵(흑당 베이스 2P)', '컵 (옆면 위주로) 돌려주기', '밀크티 시럽 2P', '얼음(가득)', '우유(가득, 250ml)',
        ],
      },
    },
  ],
}