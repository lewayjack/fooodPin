'use strict';

var map;
var markersList = ko.observableArray([]);
var newsList = ko.observableArray([]);

var Location = function(data) {
    var self = this;
    var tags = [];
    self.point = new BMap.Point(data.location.lng, data.location.lat);
    self.clicks = 0;
    
    
    self.name = ko.observable(data.name);
    self.address = ko.observable(data.address);
    self.location = ko.observable(data.location);
    
    self.marker = new BMap.Marker( self.point);
    
    data.tags.forEach(function(e){
        tags.push(ko.observable(e));
    });
    self.tags = ko.observableArray(tags);


    self.contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">' + self.name() + '</h1>' + '<div id="bodyContent">' + '<p>' + self.address() + '</p>' + '</div>' + '</div>';
    map.addOverlay(self.marker);
    self.marker.addEventListener("click",function(){
        
        map.clearOverlays();//清除所有覆盖物
        map.addOverlay(self.marker);
        mapView.toggleBounce(self);
        map.centerAndZoom(self.point,15);
    });
    self.marker.addEventListener("mouseover",function(){
        self.marker.openInfoWindow(new BMap.InfoWindow(self.contentString));
    })

};

var model = {
    locations: [{
        name: "老超哥拌食处",
        address: "奎星楼街23号附18号(近小通巷)",
        location: {
            lat: 30.674014,
            lng: 104.061384
        },
        tags:[{tag:"干拌串串"},{tag:"冰粉"},{tag:"辣"}]
    }, {
        name: "山城风串串王",
        address: "建设巷14号",
        location: {
            lat: 30.677264,
            lng: 104.109659
        },
        tags:[{tag:"串串"},{tag:"牛肉"},{tag:"毛肚"}]
    }, {
        name: "叁无粉蒸",
        address: "猛追辖区猛追横街",
        location: {
            lat: 30.675534,
            lng: 104.104111
        },
        tags:[{tag:"粉蒸"},{tag:"粉蒸肥肠"},{tag:"辣"}]
    }, {
        name: "烤肉工坊",
        address: "武侯区太平南新街6号中海格林威治商铺3栋17号(雷门拉面)",
        location: {
            lat: 30.63813,
            lng: 104.09299
        },
        tags:[{tag:"韩式烤肉"},{tag:"烤五花"},{tag:"烤牛肉"}]
    }, {
        name: "啾啾新疆私房米粉",
        address: "四川省成都市锦江区大慈寺路3号朗御二单元14楼3号",
        location: {
            lat: 30.659589,
            lng: 104.09363
        },
        tags:[{tag:"新疆炒米粉"},{tag:"炒米粉"},{tag:"辣"}]
    }, {
        name: "凉山好汉西昌烧烤",
        address: "清溪东路99 ",
        location: {
            lat: 30.683723,
            lng: 104.032723
        },
        tags:[{tag:"火盆烧烤"},{tag:"香猪肉"},{tag:"牛肉"}]
    }, {
        name: "晏烤鸭",
        address: "青羊区天成街9号",
        location: {
            lat: 30.674565,
            lng: 104.074724
        },
        tags:[{tag:"小吃"},{tag:"冒烤鸭"},{tag:"鸭血"}]
    }, {
        name: "小河帮自贡菜",
        address: "成华区建设路2号附18号地下室1层FF-6号",
        location: {
            lat: 30.678052,
            lng: 104.115793
        },
        tags:[{tag:"盐帮菜"},{tag:"自贡鱼"},{tag:"自贡兔"}]
    }, {
        name: "乱劈柴老火锅",
        address: "四川省成都市成华区双建北巷25",
        location: {
            lat: 30.685963,
            lng: 104.119531
        },
        tags:[{tag:"重庆老火锅"},{tag:"肥牛"},{tag:"毛肚"}]
    }, {
        name: "巷子肥肠",
        address: "成都武侯区一环路南二段磨子桥科华巷(汇川鱼馆对面)",
        location: {
            lat: 30.638338,
            lng: 104.082029
        },
        tags:[{tag:"川菜"},{tag:"红烧肥肠"},{tag:"卤肥肠"}]
    }, {
        name: "汉堡王(北城天街店)",
        address: "五福桥东路9号北城天街购物中心1F层058号",
        location: {
            lat: 30.705154,
            lng: 104.088109
        },
        tags:[{tag:"美式快餐"},{tag:"皇堡"},{tag:"菠萝堡"}]
    }, {
        name: "小谭豆花",
        address: "青羊区大墙东街150号（近太升南路）",
        location: {
            lat: 30.668547,
            lng: 104.08158
        },
        tags:[{tag:"面馆"},{tag:"豆花"},{tag:"老字号"}]
    }, {
        name: "乐山鲜知味钵钵鸡",
        address: "四川省成都市青羊区草堂街道送仙桥社区西北方向",
        location: {
            lat: 30.672956,
            lng: 104.035828
        },
        tags:[{tag:"钵钵鸡"},{tag:"鸡肉"},{tag:"鸡汤饭"}]
    }, {
        name: "贺水饺",
        address: "四川省成都市青羊区长顺下街55号附6",
        location: {
            lat: 30.676535,
            lng: 104.062378
        },
        tags:[{tag:"饺子店"},{tag:"川式水饺"},{tag:"粉蒸"}]
    }, {
        name: "大碗面",
        address: "四川省成都市青羊区东城根下街63",
        location: {
            lat: 30.676131,
            lng: 104.064786
        },
        tags:[{tag:"面馆"},{tag:"素椒面"},{tag:"排骨面"}]
    }, {
        name: "和幸小碗",
        address: "锦江区大科甲巷8号利都广场伊势丹7楼(近春熙路伊藤洋华堂)",
        location: {
            lat: 30.660482,
            lng: 104.086099
        },
        tags:[{tag:"日料"},{tag:"日式猪排饭"},{tag:"日式沙拉"}]
    }, {
        name: "邱公馆(伊势丹店)",
        address: "成都锦江区大科甲巷8号利都广场B座伊势丹商场B1楼(近春熙路)",
        location: {
            lat: 30.660227,
            lng: 104.086309
        },
        tags:[{tag:"面包"},{tag:"抹茶泡芙"},{tag:"奶酪布丁"}]
    }, {
        name: "包馔",
        address: "宁夏街184号新城市广场底商",
        location: {
            lat: 30.680455,
            lng: 104.064983
        },
        tags:[{tag:"台式套饭"},{tag:"奶黄包"},{tag:"卤肉饭"}]
    }, {
        name: "陈六嬢乐山跷脚牛肉",
        address: "青羊大道46号（新文化宫斜对面）",
        location: {
            lat: 30.680455,
            lng: 104.064983
        },
        tags:[{tag:"牛杂"},{tag:"清淡"},{tag:"服务好"}]
    }, {
        name: "小馋院",
        address: "成华区建设路2号附18号地下室1层FF-6号",
        location: {
            lat: 30.663831,
            lng: 104.074164
        },
        tags:[{tag:"中餐"},{tag:"荷叶饭"},{tag:"环境好"}]
    }]
};

var MapViewModel = function() {
    var self = this;
    self.itemToFilter = ko.observable("");
    self.partMarkersList = ko.observableArray([]);
    
    model.locations.forEach(function(e) { //use forEach to make ko array
        markersList.push(new Location(e));
    });
    

    self.setCurrentList = function(e) {
            map.clearOverlays();//清除所有覆盖物
            map.addOverlay(e.marker);
            map.openInfoWindow(e.infoWindow);
            mapView.toggleBounce(e);
            map.centerAndZoom(e.point,15);
            e.marker.openInfoWindow(new BMap.InfoWindow(e.contentString));

    };
    

    self.filterItem = function() {
        var filterValue = self.itemToFilter();
        var myRegExp = new RegExp(filterValue,"i");
        if ( filterValue) { // Prevent blanks 
            var markers = markersList();
            var l = markers.length - 1; //loop through array and delete value
            mapView.setMarkerVisible(false, markersList());
            for (var i = l; i >= 0; i--) { //use back to front loop for delete porposed
                var name = markers[i].name();
                if (!myRegExp.test(name)) {
                    self.partMarkersList.push(markersList()[i]);
                    markersList.remove(markersList()[i]); //can't use markers to instead markersList()...
                }
            }
        }else{
            self.partMarkersList().forEach(function(e){
                markersList.push(e);
            });
            self.partMarkersList.removeAll();
        }
        mapView.setMarkerVisible(true, markersList());
        self.itemToFilter(""); // Clear the text box
    };
};

var mapView = {
    init: function() {
		map = new BMap.Map("map");// 创建Map实例
		var point = new BMap.Point(104.073, 30.664);// 创建点坐标
		map.centerAndZoom(point,13);
		map.enableScrollWheelZoom();
        ko.applyBindings(new MapViewModel());//after map's 'init
    },
    toggleBounce: function(e) {
        e.clicks++;
        if (e.clicks % 2 !== 0) {
            e.marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        } else {
            e.marker.setAnimation(); //
        }
    },
    setMarkerVisible: function(visible, mList) { //set marker display or not
        if(visible){
            for (var i = 0; i < mList.length; i++) {
                map.addOverlay(mList[i].marker); //重新渲染标记
            }
        }else{
            map.clearOverlays();
        }

    },
    clearMapEffect: function( mList) { //set window display or not
        for (var i = 0; i < mList.length; i++) {
            mList[i].infowindow.close();
            mList[i].marker.setAnimation(null);
        }
    },
    baiduError : function (){
    $("#map").append("<h1>糟糕，连接不上百度地图了。请刷新重试。</h1>");
    }
};



