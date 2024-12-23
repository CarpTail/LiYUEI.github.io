---
title: Qt5.14.2静态库版本编译
date: 2024-12-17
order: 1
category:
  - Qt
---

# Qt5.14.2静态库版本编译

本人进日在研究CMake源码，发现cmake-gui使用了Qt作为界面实现，但在cmake软件安装目录中未发现
Qt的dll，cmake-gui.exe使用静态链接了Qt的库，具体的CMakeLists.txt如下。

![](/assets/images/cmake-qt-static-0.png)

本人之前在工作中和日常都使用的是动态库版本的Qt，遂决定编译静态库版本的Qt并记录流程。

## 编译准备

编译环境如下：

- VS2019
- ActivePerl
- Python3

其中Qt的源码使用的是随之前安装Qt5.14.2版本一起安装的（在安装时可选安装源码）。
目录位于`D:\Qt\Qt5.14.2\5.14.2\Src`，或者从官网下载
[qt-everywhere-src-5.14.2.zip](https://download.qt.io/archive/qt/5.14/5.14.2/single/qt-everywhere-src-5.14.2.zip)。

## 编译流程

解压源码，在`x64 Native Tools Command Prompt for VS 2019`的终端进入Qt源代码目录。
如下所示：

![](/assets/images/cmake-qt-static-3.png)

### 关于/MD和/MT编译选择的说明

Qt源码配置在msvc下默认使用/MD编译选项，即使用动态链接的形式来链接msvc的运行时。
如需要修改为/MT编译选项，可修改源码目录下qtbase\mkspecs\common\msvc-desktop.conf文件。
如下所示，将/MD改为/MT即可（三个）。

![](/assets/images/cmake-qt-static-4.png)

### 源码外编译

在Src目录下新建一个目录`build_msvc2019_64_static`，进行源码外部编译防止污染源码目录。
进入构建目录执行以下指令：

```bat
..\configure.bat -static -prefix "D:\qt" -confirm-license -opensource -debug-and-release -platform win32-msvc -optimize-size -no-pch -nomake examples -nomake tests -nomake tools -plugin-sql-sqlite -plugin-sql-odbc -qt-zlib -qt-libpng -qt-freetype -qt-pcre -qt-harfbuzz -qt-libjpeg -opengl desktop -mp
```

具体含义如下：

```text
configure.bat
-static                 #指明静态编译
-prefix "D:\qt"         #安装目录，最好使用不需要管理员权限的目录
-confirm-license -opensource #指明是开源版本
-debug-and-release      #指明需要debug版和release版，可以单独选择release版
-platform win32-msvc    #指明使用msvc编译，这里的win32并不指32位
-optimize-size          #最优化文件大小而不是速度(可选)
-no-pch                 #不使用预编译头文件（可选）
-nomake examples -nomake tests -nomake tools #不编译用不上的东西
-plugin-sql-sqlite -plugin-sql-odbc -qt-zlib -qt-libpng -qt-freetype -qt-pcre -qt-harfbuzz -qt-libjpeg #可选插件
-opengl desktop         #用系统自带的opengl
-mp                     #多核编译
```

### 执行编译

接着运行：

```bat
nmake
nmake install
```

编译安装结果如下：

![](/assets/images/cmake-qt-static-5.png)

## 关于Qt的License说明

Qt软件从诞生之日就是GPL/LGPL开源授权和商业授权并存的，开源不代表免费而是为了共享。以下是
Qt6版本之后在线安装时的开源要求。

![](/assets/images/cmake-qt-static-1.png)

如果需要使用Qt进行商业软件的开发，由于GPL协议的开源传染性，要求使用到qt源码的软件均需要公开源码。
CMake本来就开源，所有安心使用并使用了静态库版本进行发布。如果是商业公司：

- 购买Qt的商业许可
- 对所有使用到Qt的代码进行warpper包装，并将所有包装的代码开源

当然如果使用了静态库发布那么怎么知道你使用了Qt呢？通过一些技术手段确实可以查到，
参考FFmpeg耻辱柱(Hall Of Shame) 事件。当然如果是内网开发模式，并且客户也是内网模式，
那你随意就好（如军工行业）。

当然使用静态发布版本，工业软件肯定不止一个动态库，全都使用静态连接，会造成发布软件过大等问题，
如果是一个简单的可执行软件，那使用静态链接就很便利了。


## 参考

- [Qt for Windows - Building from Source](https://doc.qt.io/qt-5/windows-building.html)

- [编程与调试 C++ -- Qt 的 LGPL 协议](https://sunocean.life/blog/blog/2022/08/10/qt-lgpl)

- [Qt License分析、开源版与商业版的区别](https://www.cnblogs.com/linuxAndMcu/p/16359738.html)

- [QT 6.2 msvc 2019 下 静态编译](https://blog.dccif.top/2021/11/11/QT-6-2-msvc-2019-%E9%9D%99%E6%80%81%E7%BC%96%E8%AF%91/)

- [Qt5.12.5 静态编译以及裁剪大小对比](https://longxuan.ren/2020/07/11/Qt5-12-5-static-build/)

- [如何优雅的编译 QT5 静态链接版本](https://myvnet.com/p/how-to-build-qt5-static-version/)


