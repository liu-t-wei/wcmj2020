var tipuesearch = {"pages": [{'title': '網管', 'text': '', 'tags': '', 'url': '網管.html'}, {'title': 'W2(3.13)', 'text': '建網站 \n 此內容管理系統以 \xa0 https:..github.com.mdecourse.cmsimde \xa0 作為  submodule  運作 ,  可以選定對應的版本運作 , cmsimde  可以持續改版 ,  不會影響之前設為  submodule,  使用舊版  cmsimde  模組的內容管理相關運作 . \n 利用  cmsimde  建立靜態網誌方法 : \n \n 在  github  建立倉儲 , git clone  到近端 \n 參考 https:..github.com.mdecourse.newcms ,  加入除了  cmsimde  目錄外的所有內容 \n \n 以  git submodule add\xa0 https:..github.com.mdecourse.cmsimde \xa0cmsimde \n 建立  cmsimde  目錄 ,  並從  github  取下子模組內容 . \n 3.在近端維護時 ,  更換目錄到倉儲中的  cmsimde,  以  python wsgi.py  啟動近端網際伺服器 . \n 動態內容編輯完成後 ,  以  generate_pages  轉為靜態內容 ,  以  git add commit  及  push  將內容推到遠端 . \n \n 之後若要以  git clone  取下包含  submodule  的所有內容 ,  執行 : \n \n git clone --recurse-submodules\xa0 https:..github.com.mdecourse.newcms.git \n', 'tags': '', 'url': 'W2(3.13).html'}, {'title': 'W3(3.20)', 'text': '筆記 \n terminology 專業術語、 particular  特別、 technical  技術、 application  應用、 \n software 軟體、 hardware  硬體、 firmwarre  韌體、 machine language  機器語言、 \n URL:Uniform Resourse Locator\xa0 統一資源定位、 command wundow  命令視窗、 submodule  子模組 \n 程式令 : \n Y:←指 y 槽  Y:\\\xa0 \xa0← 表示 Y 槽的 root 根目錄  >  為回應符號 (prormptsign)\xa0 \\  為 blackslash  反斜線  dir 為顯示目錄內容的指令  cd tmp  表示 change directory  到指定的目錄  git 為分散式版次管理的指令名稱  git clone 表示要使用 git 對遠端的倉儲進行 clone 。 \n', 'tags': '', 'url': 'W3(3.20).html'}, {'title': 'W4(3.27)', 'text': 'portable 可攜、 Assembly  執行機器速度快但對硬體的相容性差、 objective -c \n →開發 iphone 的前一代程式、 compile  編譯、 interpret  解譯、 unix 電腦系統的一種、 shell  殼、 graphics  圖形、 device  物件、 interface  介面 \n ps.c++ →加入物件功能的 C \n', 'tags': '', 'url': 'W4(3.27).html'}, {'title': 'W5(4.3)', 'text': '掃墓 ~~ 休息 \n', 'tags': '', 'url': 'W5(4.3).html'}, {'title': 'W6(4.10)', 'text': '大致講解 ↓ 的用法和規格 \n portable obs\xa0→直播軟體 \n meet.google.com →google 的視訊軟體 \n \xa0 \n', 'tags': '', 'url': 'W6(4.10).html'}, {'title': 'W7(4.17)', 'text': 'abunta→遠端操控電腦、 asscii  美國標準交換資訊碼。 \xa0 \n tmp>wcmj2020>init.py\xa0 \xa0更改網頁標題 \n', 'tags': '', 'url': 'W7(4.17).html'}, {'title': 'W8(4.24)', 'text': '網站 push 的步驟\n \n 1.先把網站切成靜態 Home \n 2.git add空格 .\xa0 \xa0→ 意思是跟電腦說現在要讀的東西 \n 3.git comit -m"add w□" →跟電腦說你要讀的東西是什麼 \n 4.git push →推上動態網頁 \n 讓我們實作一次分組，弄 meet.google.com 的實際操作。好讓下次上課可以線上上課。 \n \xa0 \n', 'tags': '', 'url': 'W8(4.24).html'}, {'title': 'W9(5.1)', 'text': '\n', 'tags': '', 'url': 'W9(5.1).html'}, {'title': '電腦軟體與硬體簡介', 'text': 'Type of Computer： \n super computer 超級電腦 \n MainFrane 伺服器主機 \n Server 伺服器 \n PC 個人電腦 \n Microcontroler 微電腦 \n Mobile Phone 手機 \n \n \n \n 硬體名稱 \n 說明 \n 比喻 \n \n \n CPU \n 中央處理器，電腦的心臟，速度越快效率越好。新一代的電腦甚至可以有多核心（兩個以上的CPU）。 \n 如果將主機比喻為一家商店，那CPU可以說是店員，動作越快、反應越靈巧的店員可以增加銷售的速度。 \n \n \n 記憶體RAM \n 電腦系統運作時暫時儲存資料的地方，其大小也是影響電腦速率快慢的重要因素，建議入門最起碼可以使用2G。因為記憶體大小很重要、而且價格不貴、又不容易損壞，因此「寧可過剩、不要不足」。 \n 猶如商店的賣場面積，賣場越大可以擺的東西越多，客人需要即可直接銷售，而不必進入貨倉中翻箱倒櫃，浪費時間、拖垮效率。 \n \n \n 硬碟 \n 儲存系統軟體、應用軟體以及資料的儲存空間，目前一般大小約為數百G，一台主機可以裝多顆硬碟。 \n 猶如貨倉的大小，貨倉越大當然可以囤積的商品越多。 \n \n \n 光碟機、 燒錄機 \n 光碟機：只能讀取CD、DVD（含音樂、影片及資料），古董機。 燒錄機：本身已經具備讀取功能，並且能夠將各類檔案燒錄於光碟片上，並製作為音樂CD、影片DVD、或純粹備份資料片等，為目前的主流規格。 \n \xa0 \n \n \n 讀卡機 \n 擁有不同的插槽、能夠讀取多種格式的記憶卡。 \n \xa0 \n \n \n \n w9 << \xa0 Previous \xa0 Next \xa0 >> 網路架構與設定簡介\n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n \n \xa0 \n \n', 'tags': '', 'url': '電腦軟體與硬體簡介.html'}, {'title': '網路架構與設定簡介', 'text': '第一個步驟:cd tmp \n 再來 cd wcmj2020 \n 第三部:cd cmsimde \n 第四部:python wsgi.py \n 架構: 網路架構模型分為4層，也就是經常聽到的DoD（Department of Defense）或是TCP/IP模型，如附圖所示，最上層為應用層（Application \xa0Layer），接下來依據為傳輸層（Transport Layer）、網路層（Internet Layer）、鏈結層（Link\xa0Layer）。這4層分工需要相互合作，卻又彼此獨立，好比寄信一般，需要郵局處理郵件，道路和交通工具負責運送，信才可送達目的地，但是你卻不用管郵局如何經營、交通工具如何設計、道路怎麼鋪設才會平坦又耐用。 將網路架構分層出來，便加入了許多可能性，只要符合這個網路模型，各層如何處理資訊的方式就各自獨立，不受其它外在條件的限制。舉個小小例子，筆電能夠透過有線和無線方式連上網路，但是這2種傳輸介質所看到的網頁有所差異嗎？應該不會發生有線介面看到Dream Girls，換成無線介面就變閃亮三姊妹這種情形。同時，分層模型所具備的向後相容性也可以在無線傳輸規格上看到，從現今的802.11 a/b/g/n，到未來的802.11 ac/ad，均能夠傳送網頁資料，讀者應該也沒有聽過換個傳輸規格，網頁就要重寫這種荒唐事。 \n 綠色軟體 (Greenware) << \xa0 Previous \xa0 Next \xa0 >> W10\n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorli b \n \n', 'tags': '', 'url': '網路架構與設定簡介.html'}, {'title': 'W10(5.8)', 'text': '\n SSH===安全編碼機制 \n Public key 公開密鑰加密器 \n Cryptography 編碼學 \n Putty:EREE SSH FOR WINDOW \n 設置:移動滑鼠 \n ssh-keygen -t rsa -b 4096 -C "50833129" \n pwd:print working directory \n 網路架構與設定簡介 << \xa0 Previous \xa0 Next \xa0 >> w12-13 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n', 'tags': '', 'url': 'W10(5.8).html'}, {'title': 'W12(5.15)', 'text': '\n \n \n \n \n \n', 'tags': '', 'url': 'W12(5.15).html'}, {'title': 'W13(5.22)', 'text': '\n \n Pelican Blog 內容與 Google Blogger 同步 \n 利用 Windows 10 設定 -> 選擇預設網頁瀏覽器, 使用 Google Chrome 作為預設瀏覽器. \n 隨身程式系統必須安裝\xa0 google-api-python-client 與 oauth2client pip install google-api-python-client oauth2client OAuth 2.0 client IDs 程式類別可以選擇 other 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n add_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n \n \n \n from   markdown  import   markdown \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n import   os \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n argv  =   "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  "./../../client_secrets.json" , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 users = service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user = users.get(userId=\'self\').execute() \n \xa0\xa0\xa0\xa0 print(\'網誌名稱: %s\' % user[\'displayName\']) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 # post_id is now blogs["items"][0]["id"] \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 #for blog in blogs[\'items\']: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(blog[\'name\'], blog[\'url\']) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 post_id \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" : blog_id, \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \n \xa0\xa0\xa0\xa0 "content" : content, \n \xa0\xa0\xa0\xa0 "labels" : tags \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 insert  =   posts.insert(blogId = blog_id, body = body) \n \xa0\xa0\xa0\xa0 posts_doc  =   insert.execute() \n \xa0\xa0\xa0\xa0 post_id  =   posts_doc[ "id" ] \n \xa0\xa0\xa0\xa0 #print(posts_doc) \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 # 利用最後的 child 節點來儲存 post_id \n \xa0\xa0\xa0\xa0 to_save_post_id  =   p.insertAsLastChild()\xa0\xa0  \n \xa0\xa0\xa0\xa0 # 改為內文為空的節點, id 直接標在 head 標題  \n \xa0\xa0\xa0\xa0 to_save_post_id.b  =   "" \n \xa0\xa0\xa0\xa0 to_save_post_id.h  =   post_id \n \xa0\xa0\xa0\xa0 # 因為新增節點, commander 必須 redraw \n \xa0\xa0\xa0\xa0 c.redraw() \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n edit_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n \n \n \n from   markdown  import   markdown \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n import   os \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n argv  =   "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  "./../../client_secrets.json" , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 # 設法取得原 post 的 id \n \xa0\xa0\xa0\xa0 postid_outline  =   p.getLastChild() \n \xa0\xa0\xa0\xa0 # 直接從標題取得 post 的 id 號碼 \n \xa0\xa0\xa0\xa0 post_id  =   postid_outline.h \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 "content" : content \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 # need to save postId to outline head \n \xa0\xa0\xa0\xa0 update  =   posts.update(blogId = blog_id, postId = post_id, body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc  =   update.execute() \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將更新資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n \n W12 << \xa0 Previous \xa0 Next \xa0 >> w14 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n', 'tags': '', 'url': 'W13(5.22).html'}, {'title': 'W14(5.29)', 'text': '\n', 'tags': '', 'url': 'W14(5.29).html'}, {'title': 'MacBook 操作指南', 'text': '\n 參考資料: \n Mac OS X for Absolute Beginners.pdf \xa0 (for @gm users only) \n Learn C on the Mac.pdf \xa0 (for @gm users only) \n 這裡以 MacBook Air 2012 年出廠, 硬體規格: \n macOS Catalina Version 10.15.4 \n 1.8 GHz Dual-Core Intel Core i5 \n Memory $GB 1600 MHz DDR3 \n Graphics Intel HD Graphics 4000 1536 MB \n 的操作為例, 如何存活在機械設計工程系與精密機械工程科的網際內容管理課程. \n 由於網際內容管理課程主要以 Ｗindows 10 64 位元操作系統中的 Python 3 可攜程式環境使用為主. \n 從官方網站下載安裝 Python3 \n 因此 Catalina 系統中的首要任務, 便是安裝 Python 3: \n 在 2020.05.15 從 \xa0 https://www.python.org/downloads/mac-osx/ \xa0 可以下載安裝最新的 Python 3.8.3 解譯環境. \n 安裝 pip3 \n 有了 python 3 環境之後, 就可以從 Lanuchpad -> Other -> Terminal 開啟終端機, 並從 get-pip.py 下載用來安裝 pip3 的程式碼, 以終端機上的指令進行安裝: \n \n \n \n \n \n \n 1 \n \n \n \n sudo python3 get-pip.py \n \n \n \n \n \n \n \n 安裝 pip3 之後, 可以安裝 CMSiMDE 所需的 flask, flask_cors, lxml, bs4, markdown, pelican 以及 leo: \n \n \n \n \n \n \n 1 \n \n \n \n sudo pip3 install flask flask_cors lxml bs4 markdown pelican leo \n \n \n \n \n \n \n \n 安裝 XQuartz \n 之後, 就可以安裝 \xa0 XQuartz , 以便使用 xterm 替代 terminal. \n 接下來假如要使用 SciTE 作為文字編輯器, 建議透過 \xa0 https://www.macports.org/install.php \xa0 先根據 Catalina 操作系統版本安裝 Macports 之後, 再利用: \n \n \n \n \n \n \n 1 \n \n \n \n sudo port install scite \n \n \n \n \n \n \n \n 安裝 SciTE 文字編輯器. \n 至此, 再加上 Catalina 原有的 git 指令, 使用者已經可以在 MacBook 上執行與 Windows 10 64 位元操作系統上相同的: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n \n \n \n git clone --recurse-submodules \n \xa0 \n git add . \n \xa0 \n git commit -m  "commit message" \n \xa0 \n git push \n \xa0 \n git pull \n \xa0 \n git submodule add \n \xa0 \n git remote add \n \xa0 \n git branch \n \xa0 \n git merge \n \n \n \n \n \n \n \n 等指令, 只是在執行 python 程式時, 必須使用: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n python3 wsgi.py \n \xa0 \n pip3 install certain_module \n \n \n \n \n \n \n \n 否則直接使用 python 執行, 將會用 Python 2.7 環境執行而產生錯誤. \n 其他建議安裝套件 \n Microsoft Remote Desktop \n Firefox \n OBS \n Visual Studio Code \n Visual Studio Code Distilled.pdf \xa0 (for @gm users only) \n Flutter (Dart) \n 其他提示 \n Command + Shift + . (toggle hidden folders and files) \n W14 << \xa0 Previous \xa0 Next \xa0 >> W15-W18 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n w14 << Previous Next >> 直接在操作系統建立網際內容管理合用系統 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n MacBook 操作指南 << \xa0 Previous \n', 'tags': '', 'url': 'MacBook 操作指南.html'}, {'title': '直接在操作系統建立網際內容管理合用系統', 'text': '\n Windows 10 64 位元操作系統 \n 安裝 Python 3.8.3 與 pip \n 至\xa0 https://www.python.org/downloads/windows/ \xa0下載 Python 3.8.3 \xa0 Windows x86-64 executable installer \n 可以直接選擇安裝 pip 與所有選項內容 \n 安裝 Git \n 利用\xa0 64-bit Git for Windows Setup \xa0安裝 Git 工具. \n 安裝 CMSiMDE 所需模組 \n 利用 cmd 開啟命令列視窗, 以 pip 安裝 flask flask_cors lxml bs4 markdown pelican leo 等模組 \n pip install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Ubuntu 20.04 操作系統 (請下載 \xa0 W12 Virtualbox 虛擬主機檔案 ) \n Ubuntu 20.04 同時存在 Python 2.7 與 Python 3.8.2,\xa0 CMSiMDE 只相容於 Python 3.8.2, 因此啟動指令必須使用: \n python3 wsgi.py \n 與\xa0 \n pip3 install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Mac OS X 操作系統 \n 與 Ubuntu 20.04 類似. \n Blogger API << \xa0 Previous \xa0 Next \xa0 >> MacBook 操作指南 \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n \n \n MacBook 操作指南 << \xa0 Previous \n \n \n Copyright ©2020 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n', 'tags': '', 'url': '直接在操作系統建立網際內容管理合用系統.html'}]};