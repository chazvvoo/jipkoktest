var __QUIZ = {
	campaign: '',
	intro: {
		title: '나한테 어울리는\n 집콕 라이프는?',
		text: '강제집콕러들 모여라!',
	},
	questionnaire: {
		currentQuestion: 0,
		numberOfQuestions: 12,
		questions: {
			'1': {
				question: '늘 연락하던 친구에게 소식이 없을 때 나는',
				choices: {
					'1': {
						text: '"갑자기 바쁜 일이 생겼나 보다"<br>그러려니 한다',
						score: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
					},
					'2': {
						text: '"무슨 일 생긴 거 아니야? 아픈 건 아닌가?"<br>온갖 걱정을 한다',
						score: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
					},
				},
			},
			'2': {
				question: '친구한테 요리를 해줬을 때 나는',
				image: '',
				choices: {
					'1': {
						text: '맛없다고 말하면 상처받을 거 같다',
						score: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
					},
					'2': {
						text: '맛이 어떻든 솔직하게 얘기해주는 게 좋다',
						score: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
					},
				},
			},
			'3': {
				question: '축구 대표팀의 월드컵 결승날! 나는',
				image: '',
				choices: {
					'1': {
						text: '치킨을 뜯으며 방구석 1열에서 응원한다',
						score: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
					},
					'2': {
						text: '빨간 옷 챙겨 입고 당장 광장으로 나간다',
						score: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
					},
				},
			},
			'4': {
				question: '비가 많이 오는 날, 면접에 1분 차이로 지각한 지원자를 본 나는',
				image: '',
				choices: {
					'1': {
						text: '사정은 알겠지만 모두에게 공평하려면<br>탈락시켜야 한다고 생각한다',
						score: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
					},
					'2': {
						text: '비도 많이 오고 고작 1분이기 때문에<br>기회를 줘야 한다고 생각한다',
						score: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
					},
				},
			},
			'5': {
				question: '저녁 재료를 사러 가던 중 어디선가 맛있는 냄새가 날 때 나는',
				image: '',
				choices: {
					'1': {
						text: '"냄새가 너무 좋은데...?"<br>바로 가게로 가 포장해 간다',
						score: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
					},
					'2': {
						text: '오늘은 요리하기로 했으니까!"<br>원래대로 마트로 향한다',
						score: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				},
			},
			'6': {
				question: '과제 마감이 코 앞일 때 나는',
				image: '',
				choices: {
					'1': {
						text: '이미 일을 다 끝냈거나 마무리 단계에 있다',
						score: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					'2': {
						text: '갑자기 집중력이 올라가 빠르게 해치운다',
						score: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
					},
				},
			},
			'7': {
				question: '길을 걸으며 나는',
				image: '',
				choices: {
					'1': {
						text: '딱히 별생각을 하지 않는다',
						score: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
					},
					'2': {
						text: '간판이 떨어지는 상상을 한다',
						score: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
					},
				},
			},
			'8': {
				question: '푸른 섬 제주도로 떠난 나, 내가 선택한 숙소는?',
				image: '',
				choices: {
					'1': {
						text: '밤마다 대규모 파티가 열리는 게스트하우스',
						score: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
					},
					'2': {
						text: '옹기종기 모여 앉아 대화하는 게스트하우스',
						score: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
					},
				},
			},
			'9': {
				question: '"나 다이어트 해야 되는데 너무 많이 먹었어ㅠㅠ"라는 친구에게 나는',
				image: '',
				choices: {
					'1': {
						text: '"뭐 먹었는데? 맛있는 거 먹었어??"',
						score: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
					},
					'2': {
						text: '"괜찮아. 원래 다이어트는 내일부터지!"',
						score: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
					},
				},
			},
			'10': {
				question: '롤러코스터를 타기 전 나는',
				image: '',
				choices: {
					'1': {
						text:
							'"타고 있는데 갑자기 고장 나면 어쩌지?<br>기절하면 어쩌지?" 온갖 시나리오를 쓴다',
						score: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
					},
					'2': {
						text: '"오... 별일 없겠지 뭐"라고 생각한다',
						score: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
					},
				},
			},
			'11': {
				question: 'DIY 가구를 만들 때 나는',
				image: '',
				choices: {
					'1': {
						text: '일단 시작부터 하고 도저히 모르겠으면 설명서를 본다',
						score: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
					},
					'2': {
						text: '설명서부터 꼼꼼히 공부하고 조립을 시작한다',
						score: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				},
			},
			'12': {
				question: '강제 집콕하는 요즘, 나는',
				image: '',
				choices: {
					'1': {
						text: '사실 집에만 있는 게 나쁘지 않다',
						score: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
					},
					'2': {
						text: '몸이 근질근질하다 나가고 싶어!',
						score: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
					},
				},
			},
			'13': {
				question: '결과페이지',
				image: '',
				choices: {
					'1': {
						text: '000',
						score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					'2': {
						text: '000',
						score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				},
			},
		},
	},
	results: {
		numberOfTypes: 16,
		questionScore: [],
		finalScore: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		types: {
			'1': {
				name: '집콕 뮤지션',
				img: 'img/guitar.PNG',
				text:
					'“흰 악보와 기타만 있다면 어디든 갈 수 있어” <br> 기타를 똥땅똥땅 치다보면 어느새 난 에펠탑 앞 버스커',
				info: [
					'다른 사람 도와주는 걸 좋아하는 따뜻한 사람이에요.',
					'그때그때 내 주위 상황에 따라 내 모습과 마음이 달라져요.',
					'정도 많고 눈물도 많아요.',
					'상대방이 이해 안 돼도 이해하려고 노력해요. 상대방의 감정은 소중하니까.',
					'남에겐 관대하지만 나에겐 끝없이 객관적이에요. 다른 사람은 몰라도 내가 실수하는 건 용납할 수 없어요.',
					'싸우는 거 싫어해요. 모든 사람이 행복했으면 좋겠어요.',
					'다 날 좋아했으면 좋겠어요. ‘미움받을 용기’ 그게 뭐죠? 어떻게.. 하는 거죠?',
					'계획 철저하게 세우고, 잘 지켜요.',
				],
				with1: '피시 방콕러',
				with1_img: 'img/game.PNG',
				with2: '알고리즘<br>지배인',
				with2_img: 'img/love.PNG',
			},
			'2': {
				name: '랜선 수다쟁이',
				img: 'img/zoom.PNG',
				text:
					'사람을 만나야 힘이 나는 나.<br> 코로나 시국에 Zoom 마저 없었다면 나는 심심해서 녹아내렸을 거에요. 캔맥 한잔 마시며 랜선수다 떨면 어느새 시간 순삭.',
				info: [
					'인싸 중에 인싸. 늘 사람들 사이에서 분위기를 주도해요.',
					'싸우는 게 싫어요. 내가 손해 보더라도 그냥 넘어갈래요.',
					'눈치가 빨라서 상대방이 어떤 생각 하는지 캐치하고 잘 맞춰줘요.',
					'리액션 좋고 공감도 잘해서 친구들이 고민 있을 때면 항상 나를 찾아요.',
					'사람들한테 칭찬받고 인정받을 때 너무 좋아요.',
					'예의 바르고 친절해서 어른들이 좋아해요.',
					'생각보다 현실적이고 세상 물정에 밝아요.',
					'정이 많고 주변 사람들을 잘 챙겨요. 사실 챙겨야 한다는 책임감 때문에 어쩔 수 없이 챙길 때도 있어요.',
				],
				with1: '멍때리카노',
				with1_img: 'img/tea.PNG',
				with2: '귤심동체',
				with2_img: 'img/sweet.PNG',
			},
			'3': {
				name: '홈스장 회원님',
				img: 'img/train.PNG',
				text:
					'집에 가만히 있을 순 없는 나.<br> 매일 규칙적으로 운동하는 날 보는 게 좋아요. 체지방 10% 도저언!!',
				info: [
					'무언가에 열중하고 있는 나한테 취한 적. 다들 있죠?',
					'무의미하게 흘러가는 시간이 싫어요. 뭐라도 해야지 직성이 풀려요.',
					'아닌 건 진짜 아니에요.',
					'은~근히 상상 많이 해요.',
					'돈 관리 잘해요. 허투루 돈 쓰는 경우가 없죠.',
					'리더가 체질인 당신. 솔직히 “이걸 맡을 사람은 나밖에 없지!” 라고 생각할 때가 많아요.',
					'느릿느릿하고 답답한 거 싫어해요.',
					'목표나 계획 세우는 거 좋아하고 그대로 안되면 스트레스 받아요.',
				],
				with1: '귤심동체',
				with1_img: 'img/sweet.PNG',
				with2: '멍때리카노',
				with2_img: 'img/tea.PNG',
			},
			'4': {
				name: '자기계발자',
				img: 'img/study.PNG',
				text:
					'흘러가는 시간을 그냥 둘 수는 없는 나.<br> 이것저것 배우는 게 즐거워요. 집콕하는 김에 자격증이나 따볼까?<br> #Studywithme.',
				info: [
					'남한테 부탁할 바에 그냥 내가 하는 게 마음 편해요. 그래서 정신 차려보면 리더가 되어있을 때도 많죠.',
					'불의를 보면 마음속이 부글부글해요.',
					'“그래서 결론이 뭔데?” 애매한 건 싫어요.',
					'시간 약속 잘 지키는 거 중요해요. 갑자기 만나는 건 싫어요. 저를 갑자기 불러내지 마세요.',
					'“오늘 할 일을 내일로 미루지 말자.”가 인생 모토에요.',
					'쓸데없는 상상 안 해요. 공상에 빠져있는 사람들이 신기해요.',
					'뭘 하든 무조건 짧은 시간 안에 효율적으로 해내는 게 좋아요.',
					'가성비 좋아해요. 비싸기만 하고 아무 쓸모 없는 걸 왜 사죠?',
				],
				with1: '알고리즘<br>지배인',
				with1_img: 'img/love.PNG',
				with2: '피시 방콕러',
				with2_img: 'img/game.PNG',
			},
			'5': {
				name: '베스트책러',
				img: 'img/read.PNG',
				text:
					'혼자 나만의 공간에 있을 때 행복한 나.<br> 따스한 햇살이 비치는 나른한 오후, 온전히 책에만 집중할래요.',
				info: [
					'확실하지도 않은데 어디서 주워들어와서 말하는 거 싫어해요. 그래서 소문도 잘 안 믿어요.',
					'드라마나 영화 등장인물에 감정이입이 너무 잘 돼서 가끔 피곤해요.',
					'계획적인 거 좋아요. 할 일 있으면 빨리 해치우는 편이에요.',
					'공감능력 좋아서 역지사지 잘하는데 남들은 나를 그만큼 생각해 주지 않는 거 같아 서운할 때가 있어요. 또 나만 진심이지?',
					'항상 무언가에 대해 생각하고 있어요. 생각이 많은 만큼 걱정도 많죠.',
					'겉은 부드럽고 순해 보이지만, 속은 단단한 외유내강형 인간이에요.',
					'제 앞에서 거짓말할 생각은 하지 마세요. 다 뻔히 보여요.',
					'겉으로 웃고 있다고 해서 막대하면 안 돼요. 속으로는 무슨 생각을 하고 있을지 몰라요.',
				],
				with1: '다같이<br>소비질러',
				with1_img: 'img/shop.PNG',
				with2: '무비우스의 띠',
				with2_img: 'img/movie.PNG',
			},
			'6': {
				name: '삼시세끼 방콕편',
				img: 'img/cook.PNG',
				text:
					'뭐 하러 시켜 먹나요. 어제도 오늘도 내일도 내가 요리사♪♬ <br>내가 만든 음식이 맛있을 때 그렇게 뿌듯할 수 없어요. 다들 뭐 먹고 싶어요!!! 제가 해줄게요!!',
				info: [
					'남을 잘 챙기는 따뜻하고 친절한 사람이에요. 때로는 나보다 남을 더 챙길 때도 많아요.',
					'사소한 거에 걱정이 많아요. “그러려니”하고 넘어가는 게 잘 안돼요.',
					'싫은 소리 잘 못해요. 했다가 상대방이 상처받으면 어떡해요.',
					'속에 있는 얘기 잘 안 해요. 스트레스 받는 일 있어도 한~~참 뒤에 얘기하거나 안 해요.',
					'대화하면 주로 듣는 쪽이에요. 공감도 잘하고 끄덕끄덕 리액션도 좋아서 고민 상담하는 친구들이 많아요.',
					'안정적이고 반복적인 거 좋아해요.',
					'사람들 앞에 나가서 얘기하는 거 싫어해요. 아마 며칠 전부터 걱정하고 있을 거예요.',
					'웬만하면 싫다고 안 해요. 상대방이 원하는 대로 해서 편한 게 나한테도 편한 거예요. 내가 싫다고 하면 그건 지인짜 싫은 거예요.',
				],
				with1: '무비우스의 띠',
				with1_img: 'img/movie.PNG',
				with2: '걸어서<br>배달속으로',
				with2_img: 'img/eat.PNG',
			},
			'7': {
				name: '방꾸쟁이',
				img: 'img/inter.PNG',
				text:
					'일 벌리기 장인인 나. 다들 “다꾸”할 때 나는 “방꾸”해요. <br>삘 받으면 무거운 가구도 척척 갈아치워요. 특히! 완벽하게 혼자 있는 상태에서 내 능력은 배가 돼요.',
				info: [
					'영양가 없고 시시콜콜한 연락 별로 안 좋아해요.',
					'독립심이 강하고 외로움을 잘 안 타요. 그래서인지 연애 필요성도 못 느껴요. 혼자가 좋아요.',
					'재고가 없으면 불안해요. 무조건 넉넉하게 챙겨놔요.',
					'억지로 비위 맞추는 거 못하고 돌려 말하는 것도 잘 못해요.',
					'완벽주의 성향이 있어서 세세하게 계획 세우는 거 잘해요. 바보 같고 비효율적인 건 싫어요.',
					'동물 좋아해요. 특히 고양이에 환장해요. 고양이가 세상을 구한다!',
					'관심 없는 건 거들떠도 안 보고 관심 분야는 진짜 끝없이 파요. 제가 제대로 하면 어디까지 갈지 몰라요.',
					'무례하고 무논리인 사람은 정말 싫어요. 그런 사람들이 나를 계속 거슬리게 한다면 화를 참기 힘들 거예요.',
				],
				with1: '방콕싱어',
				with1_img: 'img/sing.PNG',
				with2: '다같이<br>소비질러',
				with2_img: 'img/shop.PNG',
			},
			'8': {
				name: '방콕 뜨개장인',
				img: 'img/make.PNG',
				text:
					'기왕 하는 거 제대로 해야 하는 나. <br>뜨개질에 꽂혔다면 고작 목도리를 뜨고 끝낼 순 없어요. 목도리로 시작했다면 모자, 가방, 스웨터까지는 떠줘야 하는 거 아닌가요?',
				info: [
					'세상은 그렇게 아름답지 않아요. 인생은 혼자 사는 거죠.',
					'두리뭉실한 건 싫어요. 딱딱 떨어지는 게 최고예요.',
					'규칙 잘 지켜요. 횡단보도 빨간 불일 때는 절대 안 건너요.',
					'머릿속에 계획이 착착 정리되어 있어요. 즉흥적인 거 싫어요. 계획은 실천하라고 세우는 거죠.',
					'반복되는 일도 쉽게 안 질리고 꾸준히 잘 해내요. 시작한 건 끝을 봐야죠.',
					'내가 하는 게 제일 속 편해요. 다른 사람의 도움은 필요 없어요.',
					'얇고 넓은 관계보다는 좁고 깊은 관계가 좋아요.',
					'신중하고 똑 부러지는 사람이에요.',
				],
				with1: '걸어서<br>배달속으로',
				with1_img: 'img/eat.PNG',
				with2: '방콕싱어',
				with2_img: 'img/sing.PNG',
			},
			'9': {
				name: '무비우스의 띠',
				img: 'img/movie.PNG',
				text:
					'집콕할 땐 시리즈물 정주행쯤은 해줘야지! <br>갑자기 삘 받아서 해리포터 마법사의 돌부터 죽음의 성물까지 달리는 사람 나야나.',
				info: [
					'친구들이랑 노는 건 좋은데 밖에 나가긴 귀찮아요. 혼자 있는 시간이 좋아서 가끔 잠수도 타요.',
					'분위기 빼면 시체인 당신. 분위기에 잘 취해요. 감성 넘치는 건 다 좋아요.',
					'얼굴에 감정이 다 드러나는 투명한 사람이에요.',
					'신나는 건 좋은데 시끄러운 건 싫어요.',
					'눈치 빠른데 눈치 없는 척 많이 해요.',
					'하나의 일을 끝내기도 전에 새로운 일을 벌이기도 해요.',
					'남이 간섭하는 거 싫어해요. 제 일은 제가 알아서 할게요.',
					'계획을 세우긴 하는데 잘 안 지켜요. 즉흥적이고 새로운 건 늘 짜릿하니까!',
				],
				with1: '뜨개장인',
				with1_img: 'img/make.PNG',
				with2: '베스트책러',
				with2_img: 'img/read.PNG',
			},
			'10': {
				name: '다같이 소비질러',
				img: 'img/shop.PNG',
				text:
					'“고민은 배송만 늦출 뿐” <br>마음에 드는 건 사야 돼요. 결제는 미래의 나에게 맡길래요. 나는 인쇼매니아.',
				info: [
					'시시콜콜하게 자기 얘기하는 거 좋아해요. Tmi 대잔치 주의.',
					'드라마나 영화는 내용 알고 보는 게 더 재밌을 때가 많아요.',
					'관심받는 거 좋아해요. 관심 못 받으면 쫌 서운하고 슬퍼요.',
					'친구들한테 서프라이즈 파티나 선물 챙겨주는 거 좋아해요. 물론 받는 것도!',
					'사람 만나는 거 좋아해요. 강제집콕러가 된 지금 너무 속상해요.',
					'아무 걱정없이 사는 거 같지만 상처도 잘 받고 여린 나에요.',
					'귀가 얇아요. 이것도 일리가 있고 저것도 일리가 있는 거 같아요. 그치만 결국 마지막에는 내 맘대로~~',
					'“몰라~~~~~~~어떻게든 되겠지! ” 일단 시작하고 생각할래요.',
				],
				with1: '방꾸쟁이',
				with1_img: 'img/inter.PNG',
				with2: '삼시세끼<br>방콕편',
				with2_img: 'img/cook.PNG',
			},
			'11': {
				name: '걸어서 배달속으로',
				img: 'img/eat.PNG',
				text:
					'배는 고픈데 요리는 귀찮은 나.<br> 한식 중식 양식 일식 내 맘대로 시키다 보면 방구석에서 지구 한 바퀴 식도락 여행 가능.<br> ※ 확찐자 될 수 있음.',
				info: [
					'뭘 해도 성공할 거 같다는 말이 제일 좋고 팩트라고 생각해요.',
					'내가 평범한 건 견딜 수가 없어요.',
					'나는 프로팩폭러. 팩폭을 날리고 후회하지만 금방 또 잊어버려요.',
					'열정이 넘치지만 빨리 식을 때가 많아요. 뒷심이 부족하죠.',
					'반복되고 지루한 일상은 나를 지치게 해요. 늘 새로운 것이 필요해요.',
					'좋은 사람은 진짜 좋고 싫은 사람은 숨만 쉬어도 싫어요.',
					'더러운 방을 보며 정리해야지! 생각해요. 생각만 해요.',
					'독립심이 강해요. ',
				],
				with1: '삼시세끼<br>방콕편',
				with1_img: 'img/cook.PNG',
				with2: '방꾸쟁이',
				with2_img: 'img/inter.PNG',
			},
			'12': {
				name: '방콕싱어',
				img: 'img/sing.PNG',
				text:
					'넘치는 흥을 주체할 수 없는 나. <br>블루투스 마이크와 노래방 MR만 있다면 내 집이 곧 코인 노래방.<br> ※ 창문은 꼭 닫기',
				info: [
					'어디서든 적응을 잘하고 자신감이 넘쳐요.',
					'하고 싶은 건 해야 돼요. 한 번 사는 인생 즐겁게 살아야죠! 인생 뭐 있나!! YOLO~~',
					'남들이 나를 어떻게 생각하는지 딱히 신경 안 써요. 그래서 상처도 잘 안 받죠. 받아도 금방 까먹는 편.',
					'만사가 귀찮아요. 놀러 나가기도 귀찮지만 막상 나가면 제일 잘 놀아요.',
					'느린 거 싫어요. 답답한 거 싫어요. 빠른 게 좋아요. 음악도 발라드 NO. 무조건 똥땅똥땅 둠칫둠칫 쿵짝쿵짝 신나는 거.',
					'맨날 영상 2배속. 10초 건너뛰기 하는 사람 접니다. 정리 댓글. 요약 댓글. 최고에요.',
					'끝까지 무언가를 하는 게 어려워요.',
					'시원시원하고 쿨해요. 뒤끝 없어요.',
				],
				with1: '베스트책러',
				with1_img: 'img/read.PNG',
				with2: '뜨개장인',
				with2_img: 'img/make.PNG',
			},
			'13': {
				name: '알고리즘 지배인',
				img: 'img/love.PNG',
				text:
					'덕질 이즈 마이 라이프♥ <br>아이돌. 배우. 책. 영화. 드라마. 게임. 뭐든 한 번 빠지면 그것만 파요. 내 유튜브 알고리즘도 지배당했죠.',
				info: [
					'사람들 심리에 관심이 많아요. 특히, 남들이 나를 어떻게 생각하는지 너무 궁금해요.',
					'나를 잘 알지도 못하면서 마음대로 판단하고 이래라저래라 간섭하는 건 딱 질색이에요.',
					'웃음도 많고 울음도 많아요.',
					'쉽게 상처받고 사람을 잘 믿지 못해요. 저에게 따뜻한 관심을 주세요.',
					'가치관이 아주 뚜렷하고 그 가치관을 따르기 위해 노력해요.',
					'사람들과 대화할 때 리액션을 잘하지만 사실 딴 생각 하고 있을 때도 많아요.',
					'나의 생각을 말로 전달하는 것보다 글로 써서 전달하는 게 더 좋아요.',
					'혼자 있는 거 좋아하는데 외로운 건 싫어요. 연락하는 건 귀찮은데 안 하면 서운해요.',
				],
				with1: '홈스장 회원님',
				with1_img: 'img/train.PNG',
				with2: '집콕뮤지션',
				with2_img: 'img/guitar.PNG',
			},
			'14': {
				name: '귤심동체',
				img: 'img/sweet.PNG',
				text:
					'집콕이 체질인 나. 혼자 있는 시간이 좋아요.<br> 추운 겨울날은 따뜻한 이불 속에서 귤 까먹는 게 국룰이죠.',
				info: [
					'칭찬은 나를 춤추게 해요. 겉으로는 고장 나버렸지만 속은 좋아서 웃고 있답니다.',
					'관심받기 싫은데 관심받고 싶어요. 뭔 느낌인지 알죠?',
					'약속 취소되면 은근히 좋아요. 집이 최고!',
					'남한테 내 얘기 잘 안 하고 남 얘기도 잘 안 해요.',
					'또 하려면 귀찮으니까 한번 할 때 제대로 해요.',
					'따뜻하고 정이 많은 사람이에요. 누군가 부탁을 하면 거절하기 어려워요. 그치만 착해 보인다고 선 넘으면 안 돼요. 속으로 이미 손절했을거예요.',
					'자유로운 영혼이에요. 규칙적이고 반복되는 삶은 싫어요.',
					'귀차니즘 끝판왕이에요. 일은 미룰 수 있을 때까지 미뤄요.',
				],
				with1: '자기계발자',
				with1_img: 'img/study.PNG',
				with2: '랜선 수다쟁이',
				with2_img: 'img/zoom.PNG',
			},
			'15': {
				name: '멍때리카노',
				img: 'img/tea.PNG',
				text:
					'좋아하는 플레이리스트와 따뜻한 차만 있으면 몇 시간도 거뜬한 나.<br> 아무것도 안 하는 것처럼 보이지만, 당신의 머리속은 이미 오만가지 생각이 꼬리에 꼬리를 물고 있죠.',
				info: [
					'별것도 아닌 일로 징징대는 거 싫어해요. 이럴 때 영혼 없는 리액션을 하곤 해요.',
					'겉모습은 시크하고 차가워 보여도 속은 따뜻한 나에요.',
					'가식적인 거 싫어하고 가식도 못 떨어요. 마음에 없는 소리를 못해서 팩폭러라는 소리도 들어요.',
					'가는 사람 안 잡아요. 잡을 에너지도 없어요. 근데 오는 사람한테는 낯가려요.',
					'이미 머리속에서는 계획부터 시뮬레이션까지 끝냈어요. 실천을 안 해서 문제에요.',
					'“왜?”라는 말을 많이 해요. 진짜 궁금해서 물어보는 거예요. 이해가 안 되면 받아들이기 힘들어요.',
					'평상시에는 조용해 보이지만 티키타카 잘 맞는 친구 앞에서는 말이 많아져요.',
					'최소한의 노력으로 최대의 이익을 얻으려고 해요.',
				],
				with1: '집콕 뮤지션',
				with1_img: 'img/guitar.PNG',
				with2: '홈스장 회원님',
				with2_img: 'img/train.PNG',
			},
			'16': {
				name: '피시 방콕러',
				img: 'img/game.PNG',
				text:
					'그 어떤 것이 현생을 망가뜨려도 사이버 세상까지 건드릴 순 없지. <br>이렇게 혼란할 때는 잠시 도피하는 것도 나쁘지 않아.',
				info: [
					'마음먹고 하면 진짜 잘하는데 마음먹기가 귀찮아요…그냥 다 귀찮아…',
					'뭐 하나 빠지면 진짜 질릴 때까지 하는데 빨리 식어요.',
					'입에 발린 말 못 해요. 가식이 없는 앞뒤가 똑같은 사람이에요.',
					'친해지면 반전 매력이 있다는 소리를 많이 들어요.',
					'발등에 불 떨어질 때까지 미루고 미뤄요. 시간이 쪼여야 집중이 잘 되는걸요?',
					'남한테 관심이 없어요. 남이 나를 어떻게 생각하는 지도 신경 안 써요. 누가 저를 욕한다고요? 그러든 말든~',
					'관찰력이 좋아서 변화를 잘 알아차려요. *내가 좋아하는 사람 한정',
					'감정 표현 못 하고 반응도 못해요. 누군가 과한 애정표현을 한다면 그 자리에서 얼어버릴지도 몰라요.',
				],
				with1: '랜선 수다쟁이',
				with1_img: 'img/zoom.PNG',
				with2: '자기계발자',
				with2_img: 'img/study.PNG',
			},
		},
	},
};

function QUIZElement(id) {
	return document.getElementById(id);
}

function QUIZDoSomething(question, choice) {
	if (QUIZElement('quiz_next').disabled) {
		QUIZElement('quiz_next').disabled = false;
	}

	__QUIZ.results.questionScore = __QUIZ.questionnaire.questions[question].choices[choice].score;
}

QUIZElement('quiz_restart').innerText = '다시 알아보기';

function QUIZNext() {
	if (__QUIZ.questionnaire.currentQuestion === __QUIZ.questionnaire.numberOfQuestions) {
		var characterType =
			__QUIZ.results.finalScore.indexOf(Math.max(...__QUIZ.results.finalScore)) + 1;
		//window.location.href = __QUIZ.results.types[characterType].href + __QUIZ.campaign;

		var resulttitleHTML =
			'<h3>' +
			__QUIZ.results.types[characterType].name +
			'</h3>' +
			'<img src=' +
			__QUIZ.results.types[characterType].img +
			'>';
		QUIZElement('quiz_result_title').innerHTML = resulttitleHTML;

		QUIZElement('with_title').innerHTML = '나의 집콕 메이트는?';

		var resultwith1HTML =
			'<h9>' +
			__QUIZ.results.types[characterType].with1 +
			'</h9>' +
			'<a href="https://www.instagram.com/jipkok_test"><img style="width:100%; height:100%;" src=' +
			__QUIZ.results.types[characterType].with1_img +
			'></a>';
		QUIZElement('with_1_title').innerHTML = resultwith1HTML;

		var resultwith2HTML =
			'<h9>' +
			__QUIZ.results.types[characterType].with2 +
			'</h9>' +
			'<a href="https://www.instagram.com/jipkok_test"><img style="width:100%; height:100%;" src=' +
			__QUIZ.results.types[characterType].with2_img +
			'></a>';
		QUIZElement('with_2_title').innerHTML = resultwith2HTML;

		QUIZElement('share_title').innerHTML = '테스트 공유하기';

		var resulttextHTML = __QUIZ.results.types[characterType].text;
		QUIZElement('quiz_result_text').innerHTML = resulttextHTML;

		var resultinfoHTML_1 = __QUIZ.results.types[characterType].info[0];
		QUIZElement('quiz_result_info_1').innerHTML = resultinfoHTML_1;

		var resultinfoHTML_2 = __QUIZ.results.types[characterType].info[1];
		QUIZElement('quiz_result_info_2').innerHTML = resultinfoHTML_2;

		var resultinfoHTML_3 = __QUIZ.results.types[characterType].info[2];
		QUIZElement('quiz_result_info_3').innerHTML = resultinfoHTML_3;

		var resultinfoHTML_4 = __QUIZ.results.types[characterType].info[3];
		QUIZElement('quiz_result_info_4').innerHTML = resultinfoHTML_4;

		var resultinfoHTML_5 = __QUIZ.results.types[characterType].info[4];
		QUIZElement('quiz_result_info_5').innerHTML = resultinfoHTML_5;

		var resultinfoHTML_6 = __QUIZ.results.types[characterType].info[5];
		QUIZElement('quiz_result_info_6').innerHTML = resultinfoHTML_6;

		var resultinfoHTML_7 = __QUIZ.results.types[characterType].info[6];
		QUIZElement('quiz_result_info_7').innerHTML = resultinfoHTML_7;

		var resultinfoHTML_8 = __QUIZ.results.types[characterType].info[7];
		QUIZElement('quiz_result_info_8').innerHTML = resultinfoHTML_8;

		document.getElementById('totalresults').style.display = 'block';

		document.getElementById('quiz_progress').style.display = 'none';
		document.getElementById('quiz_question').style.display = 'none';
		document.getElementById('quiz_text').style.display = 'none';
		document.getElementById('quiz_choices').style.display = 'none';
		document.getElementById('quiz_next').style.display = 'none';

		document.getElementById('quiz_start').style.display = 'none';
	} else {
		document.getElementById('totalresults').style.display = 'none';
		for (var i = 0; i < __QUIZ.results.questionScore.length; i++) {
			__QUIZ.results.finalScore[i] += __QUIZ.results.questionScore[i];
		}
		__QUIZ.questionnaire.currentQuestion += 1;
		QUIZShowChoices();

		QUIZElement('quiz_next').disabled = true;
	}
}

function QUIZShowChoices() {
	var question = __QUIZ.questionnaire.currentQuestion;
	var choices = '';
	var choice = 1;

	if (question != 0) {
		QUIZElement('quiz_titles').innerText = '';
		QUIZElement('quiz_text').innerText = '';

		QUIZElement('quiz_question').innerText = __QUIZ.questionnaire.questions[question].question;
		QUIZElement('quiz_progress').innerText =
			__QUIZ.questionnaire.currentQuestion + '  /  ' + __QUIZ.questionnaire.numberOfQuestions;
		document.getElementById('quiz_start').style.display = 'none';

		document.getElementById('quiz_next').style.display = 'block';

		do {
			choices +=
				'<li><label><input type="radio" name="block" onclick="QUIZDoSomething(' +
				question +
				', ' +
				choice +
				')"><span>' +
				__QUIZ.questionnaire.questions[question].choices[choice].text +
				'</span></label></li>';
			choice++;
		} while (typeof __QUIZ.questionnaire.questions[question].choices[choice] != 'undefined');

		QUIZElement('quiz_choices').innerHTML = choices;

		if (question === __QUIZ.questionnaire.numberOfQuestions) {
			QUIZElement('quiz_next').innerText = '결과보기';
		} else {
			QUIZElement('quiz_next').innerText = '다음';
		}
	} else {
		QUIZElement('quiz_titles').innerText = __QUIZ.intro.title;
		QUIZElement('quiz_text').innerText = __QUIZ.intro.text;
		document.getElementById('result_img').style.display = 'none';

		QUIZElement('quiz_start').innerText = '눌러서 알아보기';

		document.getElementById('totalresults').style.display = 'none';
		document.getElementById('quiz_next').style.display = 'none';
	}
}

QUIZShowChoices();