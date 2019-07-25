# fullscreen
以js擷取window高度並改變body高度來達成隱藏URL Bar

# Shell in Jenkins
``` 
file=index.html
file02=hide_bar.js
key01=documentReadyStart
key02=documentReadyEnd
key03=debugger

#起始行數從關鍵字key01開始，至key02結束
startLine=$(grep -n $key01 $file02 | awk -F':' '{print $1}')
endLine=$(grep -n $key02 $file02 | awk -F':' '{print $1}')
#插入行數
serchLine=$(grep -n $key03 $file | awk -F':' '{print $1}')
insertLine=`expr $serchLine - 1`

#在$file02每行前增加空白並暫存至$file02.tmps
space="        ";
sed "s/^/$space /" $file02 > "$file02"".tmps";

#$key02的行後面添加空行並暫存至 $file02.tmps2
sed "/$key02/G" "$file02"".tmps" > "$file02"".tmps2";

#將 $file02.tmps2 文件的内容插入到 $flie 文件的第 $insertLine 行。
sed -i "$insertLine r $file02.tmps2" $file;

#拷貝file02的第 $startLine 至 $endLine 行內容到 $file02.tmps2
#sed -e "$startLine,$endLine"h $file02 > "$file02"".tmps2";

# 刪除暫存的檔案
rm "$file02"".tmps";
rm "$file02"".tmps2";

``` 
# Shell 參考資料

    sed -i '2 r a.txt' ccc.txt
    #表示將a.txt文件的内容插入到ccc.txt文件的第二行。

[sed空行添加](https://www.cnblogs.com/yangsuxia/p/3382410.html)

[參考資料 字串與檔案處理的小技巧大全](https://dotblogs.com.tw/shuinvy/2014/11/20/1473809

[鳥哥的學習私房菜 學習 Shell Scripts](http://linux.vbird.org/linux_basic/0340bashshell-scripts.php#script)

[通過例子學習sed的用法](https://charleslin74.pixnet.net/blog/post/419884144-%5Blinux%5D-%E6%AA%94%E6%A1%88%E6%96%87%E4%BB%B6%E5%AD%97%E4%B8%B2%E8%99%95%E7%90%86-sed%E7%9A%84%E7%94%A8%E6%B3%95)

[Shell字典](https://ithelp.ithome.com.tw/articles/10189741)

[英文sed資料](http://www.gnu.org/software/sed/manual/sed.html#Joining-lines)

