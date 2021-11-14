(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{734:function(t,r,e){"use strict";e.r(r);var l=e(45),u=Object(l.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("本书是第一本系统介绍Flutter技术的中文书籍，它是Flutter中文社区发起的开源项目之一，旨在帮助开发者入门，系统地、循序渐进的了解Flutter。")]),t._v(" "),e("blockquote",[e("p",[t._v("本书官网访问量较大，由于服务器配置有限，所以某些时段访问本站可能略有延迟，如果延迟较久，读者可以直接在"),e("a",{attrs:{href:"https://github.com/flutterchina/flutter-in-action/blob/master/docs/SUMMARY.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github上阅读本书"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"缘起"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缘起"}},[t._v("#")]),t._v(" 缘起")]),t._v(" "),e("p",[t._v("在全球，随着Flutter被越来越多的知名公司应用在自己的商业APP中，Flutter这门新技术也逐渐进入了移动开发者的视野，尤其是当Google在2018年IO大会上发布了第一个Preview版本后，国内刮起来一股学习Flutter的热潮。")]),t._v(" "),e("p",[t._v("在Flutter发布之初，当时，我在看完Flutter原理介绍后，就对它产生了浓厚的兴趣。当时笔者身边也一些人比较关注Flutter，我也被经常问到关于Flutter的一些问题，比如Flutter怎么样？和RN有什么区别？Flutter为什么要用Dart？当时也听到了一些批评的声音，比如有些人说Flutter只是重复造轮子，没啥亮点、Flutter最大的缺点就是使用了Dart语言等。在听到这些问题及论调后，我深知这是对Flutter的不了解而造成的，这和当时国内缺乏Flutter中文文档和教程有直接关系，很多人对Flutter的了解都只停留在Google的发布会介绍（有中文翻译）。")]),t._v(" "),e("p",[t._v("在笔者深入的了解Flutter后，深知Flutter必将是一个会改变移动开发格局的里程碑级作品，它从设计之初就对性能和开发效率兼顾，并且借鉴了React（一个Web开发框架）的响应式的UI框架设计思想等，总之，很难用一两句话说完Flutter的优点，同时我也很快成为了Flutter的路转粉。")]),t._v(" "),e("p",[t._v("为了更好的帮助中国开发者了解这门新技术，我在2018年初开始翻译Flutter官网文档，同年4月份上线了"),e("a",{attrs:{href:"https://flutterchina.club/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter中文网"),e("OutboundLink")],1),t._v("，上线后反响很强烈，Flutter中文网也很快被传播开，百度搜索排名迅速蹿升到前三，截止目前，Flutter中文官网日PV在7万左右，每日独立访问人数近一万多。")]),t._v(" "),e("p",[t._v("虽然Flutter中文网给中国开发者提供了很好的第一手了解Flutter的资料，但是笔者还会经常遇到一些对Flutter技术处于围观而不愿尝试的开发者。这主要是因为当时Flutter在国内没有成功案例，再加上新技术都有学习成本，所以即使有文档，也会有一些开发者犹豫是否来学习。为了解决这部分开发者的疑虑，我就想如果能用Flutter开发一个完整的APP发布到应用商店，这样开发者就可以在犹豫的时候可以先实际感受一下Flutter应用，这样有个直观的了解后，就会容易做出判断，为此，我开发了"),e("a",{attrs:{href:"https://flutterchina.club/app/gm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitme"),e("OutboundLink")],1),t._v("，它是一个Github客户端，它支持了源码浏览、Issue、Label等Github的大多数功能，到目前为止，通过Gitme登录过Github账号的用户有8000多人，日活用户有1000人。更重要的是，有很多人正是用了Gitme后，才来学Flutter的。")]),t._v(" "),e("p",[t._v("无论是做Flutter中文网，还是写Gitme，主要目标都是帮助开发者学习Flutter，同时消除围观开发者疑虑。但当开发者们真正开始动手时，Flutter的生态问题就变得尤为突出。由于在2018年初Flutter刚起步时，很多基础的包和库都是空白，少数已有的一些库也大都是预览版（未到1.0），存在很多bug。这个状况不是一两个人花一两天能搞定的，这是需要聚整个Flutter开发者社群之力，耗费数年时间才可能有所改善。因此，在2018年4月份，我以Flutter中文网名义发起了Flutter开源计划，该计划主要是开发一些常用的包来丰富Flutter生态，帮助开发者提高开发效率。自在github建立"),e("a",{attrs:{href:"https://github.com/flutterchina",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter中文开发者社区账号"),e("OutboundLink")],1),t._v("以来，前后开源了dio、cookieJar、flukit等多个项目，而dio在开源两周后，就迅速成为Flutter第三方包中Star排名第一的开源库。")]),t._v(" "),e("p",[t._v("虽然做的事情已经够多了，但是仍有一些很有必要去做的事情，由于时间原因，一直被搁置。")]),t._v(" "),e("p",[t._v("随着学习Flutter的人越来越多，一部分开发者通过查看官网的文档就能入门，但也有很多开发者感觉学习时仍然有些吃力，主要原因有两个，首先官网的文档主要是为了引导开发者快速上手的，讲的并不是很细；其次是我们虽然翻译了官方文档，但是对于Flutter SDK文档并没有翻译，而在开发中遇到的一些具体问题通常都得去查看SDK文档。所以，要解决这两个问题，必须得有一个系统化的Flutter教程，它不仅可以快速引导开发者入门，而且也能触及到一些细节和原理，最好也能提供一些学习和研究Flutter的方法。因此，如果能有一本能系统地介绍Flutter的书籍便是便是非常棒的！但是，当时没有一本关于Flutter的中文书籍，因此，我便计划写一本能由浅入深、系统介绍Flutter的书。2018年12月，《Flutter实战》完成初稿，并在Github上开源，同时上线了"),e("a",{attrs:{href:"https://book.flutterchina.club/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Flutter实战》电子书官网"),e("OutboundLink")],1),t._v(" ，至今每天有3000多人在线浏览本书。那为什么不直接出版？如果直接出版，不仅有稿费，而且也能保护知识产权，而直接开源，不就只能当雷锋了？其实，无论是做中文网、写Gitme、做Flutter开源项目，我的出发点都是为了能帮助中国开发者了解、学习Flutter，而这是一件非常有意义的事，只要坚持做对别人有价值的事，那么上帝迟早会奖赏你；当然我们也在网站中留了打赏的按钮，如果读者觉得有帮助，可以扫码打赏，请笔者喝一杯咖啡。另外由于成书比较仓促，当时书中也有很多错误，开源后，有很多读者提PR来纠正书中的错别字，时至今日，有78名开发者为本书提过PR，我在此，衷心的感谢你们。")]),t._v(" "),e("p",[t._v("起初，我没有出版实体书的打算，当时我以为开发者直接通过在线访问本书官网即方便又不用付费，何乐而不为。但在本书上线后，很多读者来添加微信好友，表示非常有收益，很期待出版纸质书，甚至有比较热心的读者想提前付定金预定！我理解，这是大家对我所做之事的认可和鼓励。考虑到，确实有一部分读者，尤其是还没毕业的同学，可能更喜欢通过书籍去学习，为此，我已经和机械工业出版社合作，目前本书纸质版正在出版中，敬请关注。")]),t._v(" "),e("h3",{attrs:{id:"本书组织结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本书组织结构"}},[t._v("#")]),t._v(" 本书组织结构")]),t._v(" "),e("p",[t._v("本书采用由浅入深的方式介绍Flutter技术原理，分为三篇，总计15章，各篇的主要内容如下。")]),t._v(" "),e("ul",[e("li",[t._v("第一篇，入门篇（第1章~第7章），包括Flutter技术的出现背景和简介、Flutter的各种类型的Widget以及如何构建UI。通过学习本章，读者可以掌握如何使用Flutter来构建UI界面。")]),t._v(" "),e("li",[t._v("第二篇，进阶篇（第8章~第14章），包括Flutter中的事件机制、动画、自定义组件、文件和网络、插件、国际化以及Flutter核心原理等。通过本章内容，读者可以对Flutter整体构建及原理有一个深入的认识。")]),t._v(" "),e("li",[t._v("第三篇，实例篇（第15章），本章主要通过一个简版的Github APP来将前面介绍的内容串起来，让开发者对一个完整的Flutter APP开发流有个了解。")])]),t._v(" "),e("h2",{attrs:{id:"本书特色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本书特色"}},[t._v("#")]),t._v(" 本书特色")]),t._v(" "),e("p",[t._v("笔者在大学时读过候捷（真名侯俊杰）写的一些C++相关书籍，在他的《深入浅出MFC》一书中，有一句话我印象像非常深 “唯有深入，方能浅出”。我非常认同这句话，对于一门技术，只有了解的深入，才能用最浅显、通俗的话语描述出。我在写作本书时，深入浅出就是一个主要目标。所以，本书的目标不仅是想告诉读者如何使用Flutter，而且也非常关注各个知识点的底层实现以及设计思想。从本书章节划分上来看，入门篇为“浅出”，进阶篇则是“深入”。另外由于PC客户端开发、移动开发、Web开发这些经验我都有，而Flutter本质上是一个UI系统，而UI系统的设计和实现在”大前端“下有很多相通之处，所以在本书中的一些知识点我也会对比一些其他UI系统（主要是Android或Web）相应的实现，便于有相关开发经验的读者对比理解。")]),t._v(" "),e("h2",{attrs:{id:"本书读者对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本书读者对象"}},[t._v("#")]),t._v(" 本书读者对象")]),t._v(" "),e("ul",[e("li",[t._v("读者至少熟悉一种编程语言。")]),t._v(" "),e("li",[t._v("读者最好接触过PC客户端、移动开发或Web前端开发中的一种。")]),t._v(" "),e("li",[t._v("本书不适合做为编程的入门读物。")])]),t._v(" "),e("h2",{attrs:{id:"关于随书源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于随书源码"}},[t._v("#")]),t._v(" 关于随书源码")]),t._v(" "),e("p",[t._v("由于篇幅所限，本书中大多数示例代码都只是部分核心代码，读者可以去"),e("a",{attrs:{href:"https://github.com/wendux/flutter_in_action_source_code",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("查看下载。")]),t._v(" "),e("h2",{attrs:{id:"致谢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[t._v("#")]),t._v(" 致谢")]),t._v(" "),e("p",[t._v("感谢一直以来支持Flutter中文网、Flutter开源项目的人以及所有对本书提过PR的人，正是因为有你们，才有这本书。另外尤其感谢给本书打赏过的同学，你们的支持给了我很大的鼓励。")]),t._v(" "),e("h2",{attrs:{id:"权益"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权益"}},[t._v("#")]),t._v(" 权益")]),t._v(" "),e("p",[t._v("最后，知识是应该付费的，创作不易，开源不等于免费，如果您是本书读者并手头宽裕，可以点击下面打赏按钮打赏；当然，如果您囊中羞涩，您也可以阅读本书，但我对您有个小小的要求，希望您在阅读的过程中能积极参与到本书的纠错以及未完成内容的创作上来，也算是有所付出。")]),t._v(" "),e("p",[t._v("近来在网上发现很多"),e("strong",[t._v("原封不动复制本书")]),t._v("的镜像网站和大量复制或"),e("strong",[t._v("引用了本书但未注明出处")]),t._v("的博客、文章甚至书籍；对此，笔者在此声明，本书著作权归wendux所有，任何组织或个人在未经授权的情况下复制、拷贝、抄袭本书用于商业目的，笔者保留追究其法律责任的权利。如果是非商业目的的转载和引用，请注明出处并附上本书网址。另外如有出版机构愿意为本书出版实体书或者想转载本书内容，亦或是想合作，请加微信Demons-du.")]),t._v(" "),e("h3",{attrs:{id:"勘误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#勘误"}},[t._v("#")]),t._v(" 勘误")]),t._v(" "),e("p",[t._v("由于Flutter SDK在不断更新，本书中的部分内容（如类的继承关系、参数等）可能会和新版本的Flutter不一致，读者以最新的Flutter SDK为准。另外，由于时间仓促，书中难免有错误之处，如果您发现本书中的错误，欢迎点击右上角的”编辑按钮“，提PR。如果您想一起参与本书创作，可以参考"),e("a",{attrs:{href:"https://github.com/flutterchina/flutter-in-action#%E8%B4%A1%E7%8C%AE%E9%A1%BB%E7%9F%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Flutter实战》贡献指南"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);r.default=u.exports}}]);