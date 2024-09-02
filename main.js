'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const resultLove = document.getElementById('resultLove');
  const resultJob = document.getElementById('resultJob');
  const resultMoney = document.getElementById('resultMoney');
  const resultHelth = document.getElementById('resultHelth');
  const resultAcademic = document.getElementById('resultAcademic');
  const resultTravel = document.getElementById('resultTravel');
  const resultFamily = document.getElementById('resultFamily');
  const resultPeople = document.getElementById('resultPeople');
  const resultWait = document.getElementById('resultWait');
  const resultDigital = document.getElementById('resultDigital');
  const resultCareer = document.getElementById('resultCareer');
  const resultMental = document.getElementById('resultMental');
  const resultBalance = document.getElementById('resultBalance');
  const resultSdgs = document.getElementById('resultSdgs');
  const resultCommunity = document.getElementById('resultCommunity');
  const resultGrowth = document.getElementById('resultGrowth');

  btn.addEventListener('click', () => {

    const resultsLove = ['絶好調。素晴らしい出会いや縁があり、関係が深まるでしょう。', '良好。関係が順調に進展し、次のステップへ進む準備ができています。', '安定。現状維持ですが、ゆっくりと良い方向に進むでしょう。', '少し不安定。誤解やすれ違いに注意が必要です。コミュニケーションを大切に。', '停滞気味。慎重に行動し、焦らずに時間をかけて進めることが大切です。'];
    const nLove = Math.floor(Math.random() * resultsLove.length);

    const resultsJob= ['仕事運絶好調。昇進や成功が期待でき、目標を達成するでしょう。', '順調。努力が実を結び、結果がついてくる時期です。', '安定。現状を維持しつつ、少しずつ進展が見込めます。', '少し注意が必要。無駄遣いに注意し、節約を心がけましょう。', '停滞感。焦らずに今は準備を整える時期です。無理をせず、計画的に行動しましょう。'];
    const nJob = Math.floor(Math.random() * resultsJob.length);

    const resultsMoney= ['金運絶好調。予期せぬ収入や幸運が訪れるでしょう。', '好調。計画的な支出が功を奏し、安定した収入が期待できます。', '安定。無理なくお金を使い、堅実な生活を送れるでしょう。', '少し注意が必要。計画を見直し、慎重に進めると良い結果が得られるでしょう。', '停滞感。焦らずに今は準備を整える時期です。無理をせず、計画的に行動しましょう。'];
    const nMoney = Math.floor(Math.random() * resultsMoney.length);

    const resultsHelth= ['健康運絶好調。心身ともに健やかで、活力に満ち溢れています。', '良好。健康に恵まれ、日々の生活を元気に過ごせるでしょう。', '安定。特に問題はありませんが、健康管理を怠らないようにしましょう。', '少し注意が必要。体調を崩しやすい時期です。無理をせず、休息を大切に。', '不安定。体調に気をつけ、しっかりとしたケアを行うことが大切です。'];
    const nHelth = Math.floor(Math.random() * resultsHelth.length);

    const resultsAcademic= ['学業運絶好調。目標を達成し、成果を上げる時期です。努力が実を結びます。', '良好。努力が評価され、良い結果が期待できるでしょう。', '安定。普段通りの努力を続ければ、着実に成果が得られます。', '少し不安定。勉強に集中できない時期かもしれません。計画を見直して。', '停滞気味。無理をせず、勉強方法を工夫して、焦らずに進めましょう。'];
    const nAcademic = Math.floor(Math.random() * resultsAcademic.length);

    const resultsTravel= ['旅行運絶好調。楽しい旅行ができ、素晴らしい経験が得られるでしょう。', '良好。計画通りに進めば、満足のいく旅ができるでしょう。', '安定。特に問題はなく、無難な旅が期待できます。', '少し注意が必要。トラブルが起きやすいので、慎重な計画が必要です。', '不安定。今は旅立ちの時期ではないかもしれません。見直しを考えて。'];
    const nTravel = Math.floor(Math.random() * resultsTravel.length);

    const resultsFamily= ['家庭運絶好調。家族との関係が円満で、温かい家庭を築けるでしょう。', '良好。家族の支えがあり、家庭生活が充実しています。', '安定。特に問題はなく、平穏な家庭生活を送れるでしょう。', '少し不安定。家族間のコミュニケーションに注意が必要です。', '停滞気味。家族との関係がぎくしゃくする可能性があります。対話を大切に。'];
    const nFamily = Math.floor(Math.random() * resultsFamily.length);

    const resultsPeople= ['対人運絶好調。周囲の人々と良好な関係を築き、助け合える環境です。', '良好。友人や同僚との関係が順調で、協力して物事を進められるでしょう。', '安定。特に問題はなく、円滑なコミュニケーションが図れます。', '少し注意が必要。誤解やトラブルが起こりやすい時期です。慎重に対応を。', '不安定。人間関係に問題が生じやすい時期です。冷静に対応し、無理を避けましょう。'];
    const nPeople = Math.floor(Math.random() * resultsPeople.length);

    const resultsWait= ['待ち人来る。期待通りの相手が現れ、良い知らせが届くでしょう。', '待ち人来る。少し遅れますが、良い結果が得られるでしょう。', '来るかも。少し時間がかかるかもしれませんが、待つ価値があります。', '期待薄。今すぐには来ないかもしれません。別の方法を考えてみて。', '来ず。期待した相手は来ないかもしれません。別の選択肢を検討することが大切です。'];
    const nWait = Math.floor(Math.random() * resultsWait.length);

    const resultsDigital= ['デジタルの世界で順風満帆。新しいプロジェクトやSNSが大成功を収めるでしょう。', '概ね良好。デジタル活動において少し工夫すれば、更に成果が出る予感。', '現状維持。デジタルツールの活用次第で大きな進展が期待できるかも。', '注意が必要。セキュリティやデジタル依存に気をつけて。', '不調気味。デジタル活動を控えめにして、リセットする時間を持つと良いでしょう。'];
    const nDigital = Math.floor(Math.random() * resultsDigital.length);

    const resultsCareer= ['キャリアの飛躍期。昇進や転職に最高のタイミングです。', '順調。キャリアの方向性が固まりつつあります。次の一歩に自信を持って。', '安定。現状に満足しているが、更なる成長のために少し挑戦してみると良いでしょう。', '変化の時期。現状に不安があるならば、見直しを検討しましょう。', '停滞感。焦らず、今はじっくりと準備期間に充てるときです。'];
    const nCareer = Math.floor(Math.random() * resultsCareer.length);

    const resultsMental= ['心身ともに安定。ポジティブなエネルギーが溢れています。', '良好。リラックスする時間を取りながら、健康的な生活を続けましょう。', '普通。時にはストレスを感じることもありますが、上手に対処できるでしょう。', '注意が必要。自分をいたわる時間を増やし、ストレス解消を心がけて。', '不調気味。心のケアが必要です。無理をせず、自分を大切にしましょう。'];
    const nMental = Math.floor(Math.random() * resultsMental.length);

    const resultsBalance= ['完璧なバランス。仕事と家庭の調和がとれ、充実した日々を過ごせるでしょう。', '良好。やや忙しさを感じますが、全体的にはバランスが取れています。', '普通。時々、どちらかが優先されることもありますが、総じて問題ありません。', '少し不安定。家庭や仕事に偏りが生じていませんか？調整が必要です。', 'バランスが崩れがち。どちらかを重視しすぎていませんか？リセットが必要です。'];
    const nBalance = Math.floor(Math.random() * resultsBalance.length);

    const resultsSdgs= ['非常に良好。環境や社会への配慮が行き届き、良い影響を与えています。', '良好。生活の中で環境に対する意識が高まりつつあります。', '普通。特に問題はありませんが、意識を高める余地があります。', '改善の余地あり。環境や社会への配慮を見直す機会かもしれません。', '低調。サステナブルな選択を積極的に取り入れていきましょう。'];
    const nSdgs = Math.floor(Math.random() * resultsSdgs.length);

    const resultsCommunity= ['人間関係が充実。信頼できる人々に囲まれ、助け合いができる環境です。', '良好。人間関係が順調で、コミュニティでの役割も高まっています。', '普通。特に問題はありませんが、積極的に関わると更に良い結果が得られるでしょう。', '注意が必要。人間関係に不和が生じる可能性があります。慎重に行動を。', '不調気味。周囲との関係がぎこちなく感じるかもしれません。コミュニケーションを大切に。'];
    const nCommunity = Math.floor(Math.random() * resultsCommunity.length);

    const resultsGrowth= ['大きな成長が期待できる時期。学びや挑戦が成果を生むでしょう。', '良好。新しいスキルや知識を吸収するには最適なタイミングです。', '安定。努力次第で更なる成長が見込めます。コツコツと続けましょう。', '改善の余地あり。自己成長に対する意識を高め、挑戦を増やしてみましょう。', '停滞感。焦らず、今は準備期間と考え、基礎を固めましょう。'];
    const nGrowth = Math.floor(Math.random() * resultsGrowth.length);

    const results = ['大吉', '中吉', '小吉', '吉', '凶'];
    const n = Math.floor(( nLove + nJob + nMoney + nHelth + nAcademic + nTravel + nFamily + nPeople + nWait + nDigital + nCareer + nMental + nBalance + nSdgs + nCommunity + nGrowth ) / 16);


    resultLove.textContent = '恋愛運：' + resultsLove[nLove];
    resultJob.textContent = '仕事運：' + resultsJob[nJob];
    resultMoney.textContent = '金運：' + resultsMoney[nMoney];
    resultHelth.textContent = '健康運：' + resultsHelth[nHelth];
    resultAcademic.textContent = '学業運：' + resultsAcademic[nAcademic];
    resultTravel.textContent = '旅行運：' + resultsTravel[nTravel];
    resultFamily.textContent = '家庭運：' + resultsFamily[nFamily];
    resultPeople.textContent = '対人運：' + resultsPeople[nPeople];
    resultWait.textContent = '待ち人運：' + resultsWait[nWait];
    resultDigital.textContent = 'デジタル運：' + resultsDigital[nDigital];
    resultCareer.textContent = 'キャリア運：' + resultsCareer[nCareer];
    resultMental.textContent = 'メンタルヘルス運：' + resultsMental[nMental];
    resultBalance.textContent = 'ワークライフバランス運：' + resultsBalance[nBalance];
    resultSdgs.textContent = 'サスティナブル運：' + resultsSdgs[nSdgs];
    resultCommunity.textContent = 'コミュニティ運：' + resultsCommunity[nCommunity];
    resultGrowth.textContent = '自己成長運：' + resultsGrowth[nGrowth];
    result.textContent = results[n];


  });
}