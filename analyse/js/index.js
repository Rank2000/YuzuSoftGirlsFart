let showGirl = ''
renderAnalyseContent(0)
// 1.1 返回首页按钮
document.querySelector('.btn-back-index').addEventListener('click', function () {
  location.href = '../index.html'
})

// 1.2 绑定根据当前导航渲染内容按钮
document.querySelector('.analyse-nav ul').addEventListener('click', function (e) {
  // 事件委托
  if (e.target.tagName === 'LI') {
    // console.log(e.target.tagName)
    // 清除选中样式
    Array.from(this.children).forEach(item => {
      item.classList.remove('active')
    })
    // 为选中的LI添加样式
    e.target.classList.add('active')

    // 渲染页面
    renderAnalyseContent(e.target.dataset.id)
  }
})

// 1.3 当女主喘息时,随机播放放屁与肠鸣音效
// 每 12 秒播放放屁音效
let faudio = setInterval(function () {
  // 判断喘息是否暂停，喘息则执行相关代码
  if (!document.querySelector('.breathe-audio audio').paused) {
    // 调用随机放屁函数
    const fartRes = randomFart()
    
  } else {
    // 暂停时打印 没有放屁
    console.log('没有放屁')
  }
}, 12000)
// 每 10秒播放 肠鸣音效
let baudio = setInterval(function () {
  // 判断喘息是否暂停，喘息则执行相关代码
  if (!document.querySelector('.breathe-audio audio').paused) {
    // 调用随机肠鸣函数
    randomBorborygmus(showGirl)
  } else {
    console.log('没有肠鸣')
  }
}, 10000)
// 函数

// 渲染页面
function renderAnalyseContent(id) {
  // 收集data-id并判断值
  const newId = parseInt(id)
  // 梯队文字数据
  const rank_fartSmell = [{ span1: 'T0', span2: '极臭' }, { span1: 'T0.5', span2: '巨臭' }, { span1: 'T1', span2: '特别臭' }, { span1: 'T1.5', span2: '很臭' }, { span1: 'T2', span2: '臭' }, { span1: 'T2.5', span2: '比较臭' }, { span1: 'T3', span2: '一般' }, { span1: 'T3.5', span2: '有一点臭' }, { span1: 'T4', span2: '淡臭' }, { span1: 'T4.5', span2: '很淡的臭' }, { span1: 'T5', span2: '几乎没味道' }]
  const rank_fartCount = [{ span1: 'T0', span2: '屁量极大' }, { span1: 'T0.5', span2: '屁量巨大' }, { span1: 'T1', span2: '屁量特别大' }, { span1: 'T1.5', span2: '屁量很大' }, { span1: 'T2', span2: '屁量大' }, { span1: 'T2.5', span2: '屁量比较大' }, { span1: 'T3', span2: '屁量一般' }, { span1: 'T3.5', span2: '屁量较小' }, { span1: 'T4', span2: '屁量小' }, { span1: 'T4.5', span2: '屁量非常小' }, { span1: 'T5', span2: '屁量极小' }]
  const rank_fartEndure = [{ span1: 'T0', span2: '极能忍耐' }, { span1: 'T0.5', span2: '巨能忍耐' }, { span1: 'T1', span2: '特别能忍耐' }, { span1: 'T1.5', span2: '很能忍耐' }, { span1: 'T2', span2: '能忍耐' }, { span1: 'T2.5', span2: '比较能忍耐' }, { span1: 'T3', span2: '一般' }, { span1: 'T3.5', span2: '忍耐较弱' }, { span1: 'T4', span2: '忍耐弱' }, { span1: 'T4.5', span2: '不擅长忍耐' }, { span1: 'T5', span2: '极不擅长忍耐' }]
  // console.log(newId)
  // 定义模板字符串变量，暂时不赋值
  let rankStr
  // 准备好内容字符串插入.analyse-content类,1-3相同排行榜模板，4介绍特殊
  if (newId === 3) {
    console.log('详细介绍')
    rankStr = `
    <!-- 梯队 -->
    <!-- 分析的标题 -->
    <div class="analyse-title">
      <h3>柚子社女主放屁鉴赏</h3>
    </div>
  
    <div class="all-girls">

    </div>
    
    `
  } else {
    rankStr = `
    <!-- 梯队 -->
    <!-- 分析的标题 -->
    <div class="analyse-title">
      <h3>柚子社女主放屁鉴赏</h3>
    </div>
  
    <!-- 排名 -->
    <div class="rank-list">
      <!-- 梯队 -->
      <div class="rank">
        <div class="rank-title">梯队</div>
        <div class="rank-item">
          <span>T0</span>
          <span>极臭</span>
        </div>
        <div class="rank-item">
          <span>T0.5</span>
          <span>巨臭</span>
        </div>
        <div class="rank-item">
          <span>T1</span>
          <span>特别臭</span>
        </div>
        <div class="rank-item">
          <span>T1.5</span>
          <span>很臭</span>
        </div>
        <div class="rank-item">
          <span>T2</span>
          <span>臭</span>
        </div>
        <div class="rank-item">
          <span>T2.5</span>
          <span>比较臭</span>
        </div>
        <div class="rank-item">
          <span>T3</span>
          <span>一般</span>
        </div>
        <div class="rank-item">
          <span>T3.5</span>
          <span>有一点臭</span>
        </div>
        <div class="rank-item">
          <span>T4</span>
          <span>淡臭</span>
        </div>
        <div class="rank-item">
          <span>T4.5</span>
          <span>很淡的臭</span>
        </div>
        <div class="rank-item">
          <span>T5</span>
          <span>几乎没味道</span>
        </div>
      </div>
  
      <!-- 人物 (150px*150px) -->
      <div class="girls">
        <div class="girls-title">女主</div>
        <div data-rank="T0" class="girls-rank">
          
        </div>
        <div data-rank="T0.5" class="girls-rank">
          
        </div>
        <div data-rank="T1" class="girls-rank">
          
        </div>
        <div data-rank="T1.5" class="girls-rank">
          
        </div>
        <div data-rank="T2" class="girls-rank">
          
        </div>
        <div data-rank="T2.5" class="girls-rank">
          
        </div>
        <div data-rank="T3" class="girls-rank">
          
        </div>
        <div data-rank="T3.5" class="girls-rank">
          
        </div>
        <div data-rank="T4" class="girls-rank">
          
        </div>
        <div data-rank="T4.5" class="girls-rank">
          
        </div>
        <div data-rank="T5" class="girls-rank">
          
        </div>
      </div>
  
    </div>
    `
  }
  // 给内容填充模板字符串
  document.querySelector('.analyse-content').innerHTML = rankStr

  // 屁臭排行
  if (newId === 0) {
    console.log('屁臭排行')
    // 修改标题
    document.querySelector('.analyse-title h3').innerHTML = '柚子社女主屁臭排行'
    // 修改梯队下方文字
    const myStr = '<div class="rank-title">梯队</div>' + rank_fartSmell.map(item => {
      return `
      <div class="rank-item">
        <span>${item.span1}</span>
        <span>${item.span2}</span>
      </div>
      `
    }).join('')
    // console.log(myStr)
    document.querySelector('.rank').innerHTML = myStr
    // 映射数组
    girldata.forEach(item => {
      // console.log(item)
      // 创建女主头像div
      const div = document.createElement('div')
      div.classList.add('galgirl')
      div.setAttribute('data-name', item.name)
      div.innerHTML = `
      <img src="${item.img_url}" alt="">
      <p>${item.name}</p>
      <div class="cover"></div>
      <input hidden name="name" value="${item.name}"/>
      <input hidden name="c-num" value="${item.c_num}"/>
      <input hidden name="galgame" value="${item.galgame}"/>
      <input hidden name="img-url" value="${item.img_url}"/>
      <input hidden name="breathe" value="${item.breathe}"/>
      <input hidden name="fart-smell" value="${item.fart.fart_smell}"/>
      <input hidden name="fart-count" value="${item.fart.fart_count}"/>
      <input hidden name="fart-endure" value="${item.fart.fart_endure}"/>
      <input hidden name="fart-smell-score" value="${item.fart.fart_smell_score}"/>
      <input hidden name="fart-count-score" value="${item.fart.fart_count_score}"/>
      <input hidden name="fart-endure-score" value="${item.fart.fart_endure_score}"/>
      <input hidden name="introduction" value="${item.introduction}"/>
      `
      // console.log(div)

      // 在对应梯队追加女主头像
      const girlsRank = document.querySelector(`.girls-rank[data-rank='${item.fart.fart_smell}']`)
      girlsRank.appendChild(div)
      // console.log(girlsRank)
      
    })
  }

  // 屁量排行
  if (newId === 1) {
    console.log('屁量排行')
    // 修改标题
    document.querySelector('.analyse-title h3').innerHTML = '柚子社女主屁量排行'
    // 修改梯队下方文字
    const myStr = '<div class="rank-title">梯队</div>' + rank_fartCount.map(item => {
      return `
      <div class="rank-item">
        <span>${item.span1}</span>
        <span>${item.span2}</span>
      </div>
      `
    }).join('')
    // console.log(myStr)
    document.querySelector('.rank').innerHTML = myStr
    // 映射数组
    girldata.forEach(item => {
      // console.log(item)
      // 创建女主头像div
      const div = document.createElement('div')
      div.classList.add('galgirl')
      div.setAttribute('data-name', item.name)
      div.innerHTML = `
      <img src="${item.img_url}" alt="">
      <p>${item.name}</p>
      <div class="cover"></div>
      <input hidden name="name" value="${item.name}"/>
      <input hidden name="c-num" value="${item.c_num}"/>
      <input hidden name="galgame" value="${item.galgame}"/>
      <input hidden name="img-url" value="${item.img_url}"/>
      <input hidden name="breathe" value="${item.breathe}"/>
      <input hidden name="fart-smell" value="${item.fart.fart_smell}"/>
      <input hidden name="fart-count" value="${item.fart.fart_count}"/>
      <input hidden name="fart-endure" value="${item.fart.fart_endure}"/>
      <input hidden name="fart-smell-score" value="${item.fart.fart_smell_score}"/>
      <input hidden name="fart-count-score" value="${item.fart.fart_count_score}"/>
      <input hidden name="fart-endure-score" value="${item.fart.fart_endure_score}"/>
      <input hidden name="introduction" value="${item.introduction}"/>
      `
      // console.log(div)

      // 在对应梯队追加女主头像
      const girlsRank = document.querySelector(`.girls-rank[data-rank='${item.fart.fart_count}']`)
      girlsRank.appendChild(div)
      // console.log(girlsRank)
      
    })
  }

  // 忍耐排行
  if (newId === 2) {
    console.log('忍耐排行')
    // 修改标题
    document.querySelector('.analyse-title h3').innerHTML = '柚子社女主忍耐排行'
    // 修改梯队下方文字
    const myStr = '<div class="rank-title">梯队</div>' + rank_fartEndure.map(item => {
      return `
      <div class="rank-item">
        <span>${item.span1}</span>
        <span>${item.span2}</span>
      </div>
      `
    }).join('')
    // console.log(myStr)
    document.querySelector('.rank').innerHTML = myStr
    // 映射数组
    girldata.forEach(item => {
      // console.log(item)
      // 创建女主头像div
      const div = document.createElement('div')
      div.classList.add('galgirl')
      div.setAttribute('data-name', item.name)
      div.innerHTML = `
      <img src="${item.img_url}" alt="">
      <p>${item.name}</p>
      <div class="cover"></div>
      <input hidden name="name" value="${item.name}"/>
      <input hidden name="c-num" value="${item.c_num}"/>
      <input hidden name="galgame" value="${item.galgame}"/>
      <input hidden name="img-url" value="${item.img_url}"/>
      <input hidden name="breathe" value="${item.breathe}"/>
      <input hidden name="fart-smell" value="${item.fart.fart_smell}"/>
      <input hidden name="fart-count" value="${item.fart.fart_count}"/>
      <input hidden name="fart-endure" value="${item.fart.fart_endure}"/>
      <input hidden name="fart-smell-score" value="${item.fart.fart_smell_score}"/>
      <input hidden name="fart-count-score" value="${item.fart.fart_count_score}"/>
      <input hidden name="fart-endure-score" value="${item.fart.fart_endure_score}"/>
      <input hidden name="introduction" value="${item.introduction}"/>
      `
      // console.log(div)

      // 在对应梯队追加女主头像
      const girlsRank = document.querySelector(`.girls-rank[data-rank='${item.fart.fart_endure}']`)
      girlsRank.appendChild(div)
      // console.log(girlsRank)
      
    })
  }

  // 详细介绍
  if (newId === 3) {
    // 映射数组
    girldata.forEach(item => {
      const objStr = JSON.stringify(item)

      // console.log(item)
      // 创建女主头像div
      const div = document.createElement('div')
      div.classList.add('galgirl')
      div.setAttribute('data-name', item.name)
      div.innerHTML = `
      <img src="${item.img_url}" alt="">
      <p>${item.name}</p>
      <div class="cover"></div>
      <input hidden name="name" value="${item.name}"/>
      <input hidden name="c-num" value="${item.c_num}"/>
      <input hidden name="galgame" value="${item.galgame}"/>
      <input hidden name="img-url" value="${item.img_url}"/>
      <input hidden name="breathe" value="${item.breathe}"/>
      <input hidden name="fart-smell" value="${item.fart.fart_smell}"/>
      <input hidden name="fart-count" value="${item.fart.fart_count}"/>
      <input hidden name="fart-endure" value="${item.fart.fart_endure}"/>
      <input hidden name="fart-smell-score" value="${item.fart.fart_smell_score}"/>
      <input hidden name="fart-count-score" value="${item.fart.fart_count_score}"/>
      <input hidden name="fart-endure-score" value="${item.fart.fart_endure_score}"/>
      <input hidden name="introduction" value="${item.introduction}"/>
      
      `
      // console.log(div)

      // 在对应梯队追加女主头像
      const girls = document.querySelector('.all-girls')
      girls.appendChild(div)
      // console.log(girlsRank)
      // 事件委托女主头像 鼠标进入离开动态效果
      // console.log(document.querySelectorAll('.galgirl'))


    })
  }

  // 给女主头像绑定事件
  // 1.获取全部女主头像div
  const divs = Array.from(document.querySelectorAll('.galgirl'))
  // 2.给每个头像绑定鼠标 进入 离开 事件
  divs.forEach(item => {
    // 3.鼠标进入时，添加 .show 类
    // console.log(item)
    item.addEventListener('mouseenter', function (e) {
      // console.log(e.target)
      const avatarImg = Array.from(e.target.children)[0]  // img:图片
      avatarImg.style.width = '75%'
      const girlName = Array.from(e.target.children)[1] // p:名字
      if (!girlName.classList.contains('show')) {
        girlName.classList.add('show')
      }
      const cover = Array.from(e.target.children)[2] // div:遮罩层
      cover.style.opacity = '1'
      // console.log(e.target.dataset.name)
    })

    // 4.鼠标离开时，删除 .show 类
    item.addEventListener('mouseleave', function (e) {
      // console.log(e.target)
      const avatarImg = Array.from(e.target.children)[0]  // img:图片
      avatarImg.style.width = '90%'
      const girlName = Array.from(e.target.children)[1]
      if (girlName.classList.contains('show')) {
        girlName.classList.remove('show')
      }
      const cover = Array.from(e.target.children)[2] // div:遮罩层
      cover.style.opacity = '0'
      // console.log(e.target.dataset.name)
    })

    // 5.给女主头像绑定点击事件
    item.addEventListener('click', function (e) {
      // console.log(item)
      let objgirl = {}
      const arr = Array.from(item.children)
      arr.forEach((item, index) => {
        // console.log(item,index)
        if (index >= 3) {
          // console.log(item.name + ':' + item.value)
          if (item.name === 'name') {
            objgirl['name'] = item.value
          } else if (item.name === 'c-num') {
            objgirl['c_num'] = item.value
          } else if (item.name === 'galgame') {
            objgirl['galgame'] = item.value
          } else if (item.name === 'img-url') {
            objgirl['img_url'] = item.value
          } else if (item.name === 'breathe') {
            objgirl['breathe'] = item.value
          } else if (item.name === 'fart-smell') {
            objgirl['fart_smell'] = item.value
          } else if (item.name === 'fart-count') {
            objgirl['fart_count'] = item.value
          } else if (item.name === 'fart-endure') {
            objgirl['fart_endure'] = item.value
          } else if (item.name === 'fart-smell-score') {
            objgirl['fart_smell_score'] = item.value
          } else if (item.name === 'fart-count-score') {
            objgirl['fart_count_score'] = item.value
          } else if (item.name === 'fart-endure-score') {
            objgirl['fart_endure_score'] = item.value
          } else if (item.name === 'introduction') {
            objgirl['introduction'] = item.value
          }




        }
      })
      console.log(objgirl)
      const model = document.querySelector('.model')
      model.innerHTML = `
      <div class="close">X</div>
      <div class="model-header">
        <h1>详细鉴赏</h1>
        <div class="avatar">
          <img src="${objgirl.img_url}" alt="">
        </div>
      </div>
      <div class="model-body">
        <div class="introduce">
          <div class="key">
            <p>姓名：</p>
            <p>站位：</p>
            <p>源于作品：</p>
            <p>屁臭程度：</p>
            <p>屁量：</p>
            <p>忍耐：</p>
            <p>介绍：</p>
          </div>
          <div class="value">
            <p class="name"><a href="https://moegirl.uk/${objgirl.name}" target="_blank">${objgirl.name}</a></p>
            <p class="c-num">${objgirl.c_num}号位</p>
            <p class="galgame">${objgirl.galgame}</p>
            <p class="fart-smell">${objgirl.fart_smell}(${objgirl.fart_smell_score}分)</p>
            <p class="fart-count">${objgirl.fart_count}(${objgirl.fart_count_score}分)</p>
            <p class="fart-endure">${objgirl.fart_endure}(${objgirl.fart_endure_score}分)</p>
            <p class="introduction">${objgirl.introduction}</p>
          </div>
        </div>
      </div>
      `
      // 给弹框增加关闭事件
      document.querySelector('.model .close').addEventListener('click', function () {
        document.querySelector('.model').classList.add('hidden')
        // 停止喘息
        document.querySelector('.breathe-audio audio').pause()
      })

      model.classList.remove('hidden')
      if (objgirl.breathe) {
        document.querySelector('.breathe-audio audio').src = objgirl.breathe
        document.querySelector('.breathe-audio audio').loop = true
        document.querySelector('.breathe-audio audio').play()
      }
      
      // 赋值当前选中女主
      showGirl = objgirl.name
    })

  })


}

// 随机数函数
function getRandom(N, M) {
  N = N || 0
  M = M || 0
  return Math.floor(Math.random() * (M - N + 1) + N)
}

// 随机放屁函数
function randomFart() {
  // 随机分类屁
  const randomClass = getRandom(1, 5)

  if (randomClass === 1) { // 闷屁
    const randomNum = getRandom(1, 3)
    document.querySelector('.fart-audio audio').src = `./audio/fart/闷屁${randomNum}.wav`
    document.querySelector('.fart-audio audio').play()
    console.log(`闷屁${randomNum}`)
    // document.querySelector('.fart-audio-stuffy-fart audio').play()
    return '本次女主放的是闷屁'
  }
  if (randomClass === 2) { // 小屁
    const randomNum = getRandom(1, 4)
    document.querySelector('.fart-audio audio').src = `./audio/fart/小屁${randomNum}.wav`
    document.querySelector('.fart-audio audio').play()
    console.log(`小屁${randomNum}`)
    // document.querySelector('.fart-audio-small-fart audio').play()
    return '本次女主放的是小屁'
  }
  if (randomClass === 3) { // 一般屁
    const randomNum = getRandom(1, 5)
    document.querySelector('.fart-audio audio').src = `./audio/fart/放屁${randomNum}.wav`
    document.querySelector('.fart-audio audio').play()
    console.log(`一般屁${randomNum}`)
    // document.querySelector('.fart-audio-normal-fart audio').play()
    return '本次女主放的是一般屁'
  }
  if (randomClass === 4) { // 响屁
    const randomNum = getRandom(1, 7)
    document.querySelector('.fart-audio audio').src = `./audio/fart/响屁${randomNum}.wav`
    document.querySelector('.fart-audio audio').play()
    console.log(`响屁${randomNum}`)
    // document.querySelector('.fart-audio-big-fart audio').play()
    return '本次女主放的是响屁'
  }
  if (randomClass === 5) { // 连环屁
    const randomNum = getRandom(1, 3)
    document.querySelector('.fart-audio audio').src = `./audio/fart/连环屁${randomNum}.wav`
    document.querySelector('.fart-audio audio').play()
    console.log(`连环屁${randomNum}`)
    // document.querySelector('.fart-audio-serial-fart audio').play()
    return '本次女主放的是连环屁'
  }
}

// 随机肠鸣函数
function randomBorborygmus(G) {
  G = G || '女主'
  const randomNum = getRandom(1, 16)
  document.querySelector('.borborygmus-audio audio').src = `./audio/borborygmus/肠鸣${randomNum}.wav`
  document.querySelector('.borborygmus-audio audio').play()
  console.log(`${G}的肚子叫了：肠鸣${randomNum}.wav`)
}

