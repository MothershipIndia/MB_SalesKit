(function(){
    var script = {
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "start": "this.init()",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_9B0ABCBE_9648_B139_41D1_23C0CBEE1694"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "layout": "absolute",
 "gap": 10,
 "definitions": [{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_CE7547E5_C00F_7DE3_41D7_AA6B39994941",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_EAA779B4_F9A3_5551_41CB_A8E6AF87181B",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_CE7547E5_C00F_7DE3_41D7_AA6B39994941",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_EAA6A9B4_F9A3_5551_41CB_6786E796D763",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_2_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_2",
 "width": 4000,
 "label": "Banquet_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "items": [
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.loopAlbum(this.mainPlayList, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_11_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_11",
 "width": 4000,
 "label": "Library_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_11.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D34DEC3D_C00F_B263_419E_C977872A8206",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_EAA689B4_F9A3_5551_41E8_C8D7F0E44094",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_6_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_6",
 "width": 4000,
 "label": "Drop Off_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 300,
 "from": "left",
 "id": "effect_BE391704_B08B_5886_41CF_2DF8CD0E71CD",
 "class": "SlideInEffect",
 "easing": "linear"
},
{
 "class": "PhotoAlbum",
 "playList": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_AlbumPlayList",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_t.png",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915",
 "label": "Photo Album AMENITY LOBBY -min"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_12_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_12",
 "width": 3500,
 "label": "Lobby View 1_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_12.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2800
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_14_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_14",
 "width": 4000,
 "label": "Multipurpose Court View 1_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_14.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D34DEC3D_C00F_B263_419E_C977872A8206",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_EAA759B4_F9A3_5551_41E9_E04EDEE3A689",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_19_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_19",
 "width": 4000,
 "label": "Swimming Pool View 1_1-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_19.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_13_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_13",
 "width": 3500,
 "label": "Lobby View 2_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_13.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2800
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_3_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_3",
 "width": 3500,
 "label": "Deck View 1_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1969
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_7_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_7",
 "width": 4000,
 "label": "Entrance_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_17_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_17",
 "width": 4000,
 "label": "SKY DECK LOBBY-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_17.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_10_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_10",
 "width": 4000,
 "label": "Home Theatre_1-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_10.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_1_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_1",
 "width": 4000,
 "label": "BANQUET Outdoor_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_16_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_16",
 "width": 4000,
 "label": "senior citizen and kids play area -min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_16.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_8_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_8",
 "width": 4000,
 "label": "Gym View 1_1-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_8.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 10000,
 "id": "effect_F7E99C3F_F947_80E6_41E7_0B5089F611B6",
 "class": "FadeOutEffect",
 "easing": "linear"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_D34DEC3D_C00F_B263_419E_C977872A8206_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1416,
 "initialZoomFactor": 1,
 "id": "map_D34DEC3D_C00F_B263_419E_C977872A8206",
 "image": {
  "levels": [
   {
    "url": "media/map_D34DEC3D_C00F_B263_419E_C977872A8206.png",
    "width": 1416,
    "class": "ImageResourceLevel",
    "height": 831
   },
   {
    "url": "media/map_D34DEC3D_C00F_B263_419E_C977872A8206_lq.png",
    "width": 334,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 197
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "label": "Amenities floorplate 2",
 "scaleMode": "fit_inside",
 "height": 831
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_0_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_0",
 "width": 4000,
 "label": "AMENITY LOBBY -min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_9_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_9",
 "width": 4000,
 "label": "Gym View 2_1-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_4_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_4",
 "width": 3500,
 "label": "Deck View 2_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1969
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_5_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_5",
 "width": 4000,
 "label": "Deck View 4_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2000
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_CE7547E5_C00F_7DE3_41D7_AA6B39994941_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1415,
 "initialZoomFactor": 1,
 "id": "map_CE7547E5_C00F_7DE3_41D7_AA6B39994941",
 "image": {
  "levels": [
   {
    "url": "media/map_CE7547E5_C00F_7DE3_41D7_AA6B39994941.png",
    "width": 1415,
    "class": "ImageResourceLevel",
    "height": 852
   },
   {
    "url": "media/map_CE7547E5_C00F_7DE3_41D7_AA6B39994941_lq.png",
    "width": 329,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 199
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "label": "Terrace Floorplate 2",
 "scaleMode": "fit_inside",
 "height": 852
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_15_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_15",
 "width": 3500,
 "label": "multipurpose courtturf sky deck-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_15.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3500
},
{
 "duration": 5000,
 "class": "Photo",
 "thumbnailUrl": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_18_t.jpg",
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_18",
 "width": 3600,
 "label": "Spa_-min",
 "image": {
  "levels": [
   {
    "url": "media/album_8D5D0CCE_97D7_D156_41D1_108FDA770915_18.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 4000
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_9B0ABCBE_9648_B139_41D1_23C0CBEE1694",
 "backgroundOpacity": 0,
 "children": [
  "this.ViewerAreaLabeled_8D7EABA0_97C8_57CA_41DB_3E4B03C3A0E1",
  "this.Container_BE46750E_B10C_E90D_41C0_CC24D01F90E0",
  "this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871",
  "this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1",
  "this.Container_9850EFE8_9648_4F5A_41DB_1433FE73D438",
  "this.Container_81FC07F9_96C8_BF3A_41DE_AC026BF89EA0",
  "this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220",
  "this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "MAIN CONTAINER"
 },
 "horizontalAlign": "left",
 "shadow": false
},
{
 "items": [
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.64",
     "class": "PhotoCameraPosition",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_1",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_2",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.42",
     "class": "PhotoCameraPosition",
     "y": "0.55",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_3",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.45",
     "class": "PhotoCameraPosition",
     "y": "0.58",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_4",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_5",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.51",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_6",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_7",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.53",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_8",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_9",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.42",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_10",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "y": "0.64",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_11",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.60",
     "class": "PhotoCameraPosition",
     "y": "0.74",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_12",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.71",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_13",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.73",
     "class": "PhotoCameraPosition",
     "y": "0.47",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_14",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.43",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_15",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.56",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_16",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_17",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.48",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_18",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "y": "0.27",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_8D5D0CCE_97D7_D156_41D1_108FDA770915_19",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.34",
     "zoomFactor": 1.1
    },
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_8D5D0CCE_97D7_D156_41D1_108FDA770915_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_8D7EABA0_97C8_57CA_41DB_3E4B03C3A0E1",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "left": "0%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "data": {
  "name": "PHOTO VIEWER"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_BE46750E_B10C_E90D_41C0_CC24D01F90E0",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_A4EDF2AE_B5BD_C257_41D2_40CBA69CC834"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "35%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "EXPLORE CONTAINER"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "show": "this.setComponentVisibility(this.Container_BE46750E_B10C_E90D_41C0_CC24D01F90E0, false, 0, this.effect_F7E99C3F_F947_80E6_41E7_0B5089F611B6, 'hideEffect', false)",
 "scrollBarColor": "#000000"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871",
 "backgroundOpacity": 0,
 "children": [
  "this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9",
  "this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01",
  "this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3",
  "this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D",
  "this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3",
  "this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6",
  "this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF",
  "this.Image_8D324245_9648_714A_41CD_F081F35639A5",
  "this.Image_8D72F393_9648_77CF_41E0_EA154027863D",
  "this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7",
  "this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598",
  "this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF",
  "this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9",
  "this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9",
  "this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B",
  "this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32",
  "this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023",
  "this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA",
  "this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0",
  "this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "AMENITIES IMAGES"
 },
 "horizontalAlign": "left",
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1",
 "backgroundOpacity": 0,
 "children": [
  "this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C",
  "this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63",
  "this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC",
  "this.Image_8DD08A36_9648_F136_41E1_9B06325400A5",
  "this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37",
  "this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B",
  "this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E",
  "this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A",
  "this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167",
  "this.Image_8C220872_9678_B14E_41E2_4F8F7704D640",
  "this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA",
  "this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7",
  "this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A",
  "this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487",
  "this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2",
  "this.Image_8DE480AD_9648_51DA_41D5_25D724414130",
  "this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348",
  "this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2",
  "this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1",
  "this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "35%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 100,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "TAGS"
 },
 "horizontalAlign": "right",
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_9850EFE8_9648_4F5A_41DB_1433FE73D438",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_993CFD57_9649_D375_41D5_043DDDAE3428"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "20%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "MINIMISED CONTAINER"
 },
 "horizontalAlign": "left",
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_81FC07F9_96C8_BF3A_41DE_AC026BF89EA0",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_86E2BF57_9678_4F77_41C0_1AA25BE954B6",
  "this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "20%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "MAXIMISED CONTAINER"
 },
 "horizontalAlign": "left",
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_A065A469_B10D_2F37_41E4_5EB4DA739220",
 "backgroundOpacity": 0.5,
 "children": [
  "this.Image_A187BDD8_B10D_3915_41C8_EFED284A422A",
  "this.Image_A1B325D7_B105_691B_41E2_DD95EFD3094A",
  "this.IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82",
  "this.IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "80%",
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "FLOOR PLAN CONTAINER"
 },
 "horizontalAlign": "left",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_AF276327_BF94_FBB5_41D6_43239C1D2088",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "hidden",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "CLEAR BUTTON CONTAINER"
 },
 "horizontalAlign": "left",
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_A4EDF2AE_B5BD_C257_41D2_40CBA69CC834",
 "backgroundOpacity": 0.5,
 "children": [
  "this.Image_B783D916_96C8_D0F6_41E1_6A6CCAFC0D91",
  "this.Image_BA32CE94_B5D6_424B_41B9_1A2DB37FE6C3",
  "this.Image_A59EE224_B5DA_424B_41E6_0E3BDA029ED3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "rollOut": "this.setComponentVisibility(this.Image_BA32CE94_B5D6_424B_41B9_1A2DB37FE6C3, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOver": "this.setComponentVisibility(this.Image_BA32CE94_B5D6_424B_41B9_1A2DB37FE6C3, true, 0, null, null, false)",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "height": "13%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "paddingBottom": 0,
 "data": {
  "name": "EXPLORE BUTTON CONTAINER"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000"
},
{
 "id": "Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "ENTRANCE"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "DROP OFF"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "LOBBY VIEW 01"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "LOBBY VIEW 02"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "AMENITY LOBBY"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "BANQUET OUTDOOR"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D71E043_97C8_514D_41B5_AC85A16448DF",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D71E043_97C8_514D_41B5_AC85A16448DF.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "BANQUET HALL"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D324245_9648_714A_41CD_F081F35639A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D324245_9648_714A_41CD_F081F35639A5.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "SWIMMING POOL AREA"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D72F393_9648_77CF_41E0_EA154027863D",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D72F393_9648_77CF_41E0_EA154027863D.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "MULTIPURPOSE COURT"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D500274_964B_B149_41BB_B2AEBF93BFC7",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D500274_964B_B149_41BB_B2AEBF93BFC7.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "SENIOR CITIZEN AND KIDS PLAY AREA"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D618465_9648_D14A_41E2_1ADD8C0EE598",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D618465_9648_D14A_41E2_1ADD8C0EE598.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "SPA"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "GYM VIEW 01"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "GYM VIEW 02"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8E936A3E_97C8_B136_41CB_01E6458751D9",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8E936A3E_97C8_B136_41CB_01E6458751D9.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "DECK VIEW 01"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "DECK VIEW 02"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "DECK VIEW 03"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D75F982_97B8_D3CE_41CB_8D36F952A023",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D75F982_97B8_D3CE_41CB_8D36F952A023.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "LIBRARY"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "HOME THEATRE"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "SKY DECK TURF"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "SKY DECK LOBBY"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "ENTRANCE"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "DROP OFF"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DF46AF7_9648_5136_41C5_12412F61A5FC",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DF46AF7_9648_5136_41C5_12412F61A5FC.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "LOBBY VIEW 01"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DD08A36_9648_F136_41E1_9B06325400A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DD08A36_9648_F136_41E1_9B06325400A5.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "LOBBY VIEW 02"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C4E464D_9658_515A_41B6_ED096D5D2D37",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C4E464D_9658_515A_41B6_ED096D5D2D37.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "AMENITY LOBBY"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C62968D_9678_F1DA_41D0_90728AA1485B",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C62968D_9678_F1DA_41D0_90728AA1485B.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "OUTDOOR BANQUET"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "BANQUET HALL"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "SWIMMING POOL"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "MULTIPURPOSE COURT VIEW"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C220872_9678_B14E_41E2_4F8F7704D640",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C220872_9678_B14E_41E2_4F8F7704D640.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "SENIOR CITIZEN & KIDS PLAY AREA"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DDB7756_967F_BF76_419D_FAAB46A029DA",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DDB7756_967F_BF76_419D_FAAB46A029DA.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "SPA"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "GYM VIEW 01"
 },
 "horizontalAlign": "right",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "GYM VIEW O2"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D7D9890_9659_D1CA_41C1_A0488B778487",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8D7D9890_9659_D1CA_41C1_A0488B778487.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "DECK VIEW 01"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "DECK VIEW 02"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DE480AD_9648_51DA_41D5_25D724414130",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DE480AD_9648_51DA_41D5_25D724414130.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "DECK VIEW 03"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8DB58851_9648_714A_41D8_D44B8C4C4348",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8DB58851_9648_714A_41D8_D44B8C4C4348.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "LIBRARY"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "HOME THEATRE"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "SKY DECK TURF"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_8D85A4C2_9678_714E_41CC_8F120B1226BD",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_8D85A4C2_9678_714E_41CC_8F120B1226BD.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "SKY DECK LOBBY"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_993CFD57_9649_D375_41D5_043DDDAE3428",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_98F239F0_9648_D349_41D4_21D20E7E80E9"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "47.5%",
 "height": "5%",
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "RIGHT ARROW CONTAINER"
 },
 "horizontalAlign": "left",
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_86E2BF57_9678_4F77_41C0_1AA25BE954B6",
 "backgroundOpacity": 0.4,
 "children": [
  "this.Container_84B52F74_96B8_4F4A_41CE_60A4833E2754"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "gap": 0,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 100,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 100,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "MAXIMISED TEXT CONTAINER"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarColor": "#000000"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_99EBD9EF_9648_7356_41CF_47E316D7E1B9"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "47.5%",
 "height": "4.989%",
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 10,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "LEFT ARROW CONTAINER"
 },
 "horizontalAlign": "right",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_A187BDD8_B10D_3915_41C8_EFED284A422A",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_A187BDD8_B10D_3915_41C8_EFED284A422A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "AMENITIES FLOOR PLAN"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "id": "Image_A1B325D7_B105_691B_41E2_DD95EFD3094A",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_A1B325D7_B105_691B_41E2_DD95EFD3094A.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "TERRACE FLOOR PLAN"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "maxHeight": 35,
 "maxWidth": 32,
 "id": "IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82_pressed.png",
 "width": 32,
 "right": "0.12%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82_rollover.png",
 "propagateClick": false,
 "top": "43.62%",
 "height": 32,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Image_A1B325D7_B105_691B_41E2_DD95EFD3094A, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5, true, 0, null, null, false); this.setComponentVisibility(this.Image_A187BDD8_B10D_3915_41C8_EFED284A422A, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "NEXT"
 },
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82_pressed_rollover.png",
 "cursor": "hand"
},
{
 "maxHeight": 32,
 "maxWidth": 32,
 "id": "IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5_pressed.png",
 "width": 32,
 "right": "0.12%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5_rollover.png",
 "propagateClick": false,
 "top": "43.62%",
 "height": 32,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Image_A187BDD8_B10D_3915_41C8_EFED284A422A, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_A1DF727A_B17D_2B0A_41DE_BFE6C78BAD82, true, 0, null, null, false); this.setComponentVisibility(this.Image_A1B325D7_B105_691B_41E2_DD95EFD3094A, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "BACK"
 },
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_A04A5E6F_B103_1B0B_41D0_36125F1282E5_pressed_rollover.png",
 "cursor": "hand"
},
{
 "maxHeight": 500,
 "maxWidth": 500,
 "id": "IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F_pressed.png",
 "left": "96.12%",
 "right": "2%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F_rollover.png",
 "propagateClick": false,
 "top": "4%",
 "bottom": "93%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_81FC07F9_96C8_BF3A_41DE_AC026BF89EA0, false, 0, null, null, false); this.setComponentVisibility(this.Container_86E2BF57_9678_4F77_41C0_1AA25BE954B6, false, 0, null, null, false); this.setComponentVisibility(this.Container_84B52F74_96B8_4F4A_41CE_60A4833E2754, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false); this.setComponentVisibility(this.Container_BE46750E_B10C_E90D_41C0_CC24D01F90E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_993CFD57_9649_D375_41D5_043DDDAE3428, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "CLEAR BUTTON"
 },
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_A17E026F_B105_2B0B_41E2_BE2D4F1DFE4F_pressed_rollover.png",
 "cursor": "hand"
},
{
 "id": "Image_B783D916_96C8_D0F6_41E1_6A6CCAFC0D91",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_B783D916_96C8_D0F6_41E1_6A6CCAFC0D91.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "paddingBottom": 0,
 "scaleMode": "fit_to_width",
 "data": {
  "name": "EXPLORE IMAGE"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "id": "Image_BA32CE94_B5D6_424B_41B9_1A2DB37FE6C3",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_BA32CE94_B5D6_424B_41B9_1A2DB37FE6C3.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "scaleMode": "fit_to_width",
 "data": {
  "name": "EXPLORE HOVER"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false
},
{
 "id": "Image_A59EE224_B5DA_424B_41E6_0E3BDA029ED3",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "paddingRight": 0,
 "url": "skin/Image_A59EE224_B5DA_424B_41E6_0E3BDA029ED3.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_81FC07F9_96C8_BF3A_41DE_AC026BF89EA0, true, 0, null, null, false); this.setComponentVisibility(this.Container_86E2BF57_9678_4F77_41C0_1AA25BE954B6, true, 0, null, null, false); this.setComponentVisibility(this.Container_84B52F74_96B8_4F4A_41CE_60A4833E2754, true, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, true, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, true, 0, null, null, false); this.setComponentVisibility(this.Container_BE46750E_B10C_E90D_41C0_CC24D01F90E0, false, 0, null, null, false); this.setComponentVisibility(this.Container_993CFD57_9649_D375_41D5_043DDDAE3428, false, 0, null, null, false)",
 "class": "Image",
 "scaleMode": "fit_to_width",
 "data": {
  "name": "EXPLORE DEFAULT"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_98F239F0_9648_D349_41D4_21D20E7E80E9",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_98F239F0_9648_D349_41D4_21D20E7E80E9_pressed.png",
 "width": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_98F239F0_9648_D349_41D4_21D20E7E80E9_rollover.png",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_81FC07F9_96C8_BF3A_41DE_AC026BF89EA0, true, 0, this.effect_BE391704_B08B_5886_41CF_2DF8CD0E71CD, 'showEffect', false); this.setComponentVisibility(this.Container_86E2BF57_9678_4F77_41C0_1AA25BE954B6, true, 0, this.effect_BE391704_B08B_5886_41CF_2DF8CD0E71CD, 'showEffect', false); this.setComponentVisibility(this.Container_84B52F74_96B8_4F4A_41CE_60A4833E2754, true, 0, this.effect_BE391704_B08B_5886_41CF_2DF8CD0E71CD, 'showEffect', false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, this.effect_BE391704_B08B_5886_41CF_2DF8CD0E71CD, 'showEffect', false); this.setComponentVisibility(this.Container_993CFD57_9649_D375_41D5_043DDDAE3428, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_98F239F0_9648_D349_41D4_21D20E7E80E9.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "RIGHT ARROW"
 },
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_98F239F0_9648_D349_41D4_21D20E7E80E9_pressed_rollover.png",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_84B52F74_96B8_4F4A_41CE_60A4833E2754",
 "backgroundOpacity": 0,
 "children": [
  "this.Button_87A03E29_96B8_50DA_41BF_B492C87E98D3",
  "this.Button_87DE471B_96B8_50FE_41DD_7BCBD754F11A",
  "this.Button_87449CD8_96D9_D17A_41DF_537062FBA179",
  "this.Button_84929F9D_96D9_CFFB_41C6_0AF3EA4511C3",
  "this.Button_84BB11A6_96D9_B3D6_41CE_A14DA5C70278",
  "this.Button_8791B2BB_96D9_B13F_41D9_E2625701E681",
  "this.Button_84A54037_96D9_B136_41E1_6092F5C12CAB",
  "this.Button_84F01381_96D9_B7CA_41E1_C83679F62CC0",
  "this.Button_87D437FB_96D9_BF3E_41DA_F284E23B89FA",
  "this.Button_8772F6B4_96D8_71CA_41B6_660C58E10F56",
  "this.Button_8347FED9_96C8_F17A_41D9_2F667C359BE7",
  "this.Button_838E154C_96C8_B35A_41B3_2583588D33B4",
  "this.Button_83AED5F5_96C8_B34A_41C6_80988921DACB",
  "this.Button_83D4468C_96C8_B1DA_41D7_3FB547C2A87E",
  "this.Button_83FB973C_96C8_BF3A_41DF_7DD1B0C87673",
  "this.Button_831657F2_96C8_BF49_41E2_6BE821210FDC",
  "this.Button_833108AA_96C8_B1DE_41C0_EFA626EB097F",
  "this.Button_83CDAE49_96C9_F15A_41D9_A44627E43E7E",
  "this.Button_83F00537_96C9_D336_41D1_9FEA067BA7D8",
  "this.Button_8316F870_96C9_D14A_41D1_6B0387751CB9"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "height": 1500,
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "TEXT CONTAINER"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000"
},
{
 "id": "IconButton_99EBD9EF_9648_7356_41CF_47E316D7E1B9",
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_99EBD9EF_9648_7356_41CF_47E316D7E1B9_pressed.png",
 "width": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_99EBD9EF_9648_7356_41CF_47E316D7E1B9_rollover.png",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, false, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, false, 0, null, null, false); this.setComponentVisibility(this.Container_81FC07F9_96C8_BF3A_41DE_AC026BF89EA0, false, 0, null, null, false); this.setComponentVisibility(this.Container_86E2BF57_9678_4F77_41C0_1AA25BE954B6, false, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false); this.setComponentVisibility(this.ViewerAreaLabeled_8D7EABA0_97C8_57CA_41DB_3E4B03C3A0E1, true, 0, null, null, false); this.setComponentVisibility(this.Container_BE46750E_B10C_E90D_41C0_CC24D01F90E0, true, 0, null, null, false); this.setComponentVisibility(this.Container_9850EFE8_9648_4F5A_41DB_1433FE73D438, true, 0, null, null, false); this.setComponentVisibility(this.Container_993CFD57_9649_D375_41D5_043DDDAE3428, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_99EBD9EF_9648_7356_41CF_47E316D7E1B9.png",
 "paddingBottom": 0,
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "LEFT UP ARROW"
 },
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_99EBD9EF_9648_7356_41CF_47E316D7E1B9_pressed_rollover.png",
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "ENTRANCE"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_87A03E29_96B8_50DA_41BF_B492C87E98D3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "ENTRANCE",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "DROP OFF"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_87DE471B_96B8_50FE_41DD_7BCBD754F11A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "DROP OFF",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "LOBBY VIEW 01"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_87449CD8_96D9_D17A_41DF_537062FBA179",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "LOBBY VIEW 01",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "LOBBY VIEW 02"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_84929F9D_96D9_CFFB_41C6_0AF3EA4511C3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "LOBBY VIEW 02",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "AMENITY LOBBY"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_84BB11A6_96D9_B3D6_41CE_A14DA5C70278",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "AMENITY LOBBY",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "OUTDOOR BANQUET"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_8791B2BB_96D9_B13F_41D9_E2625701E681",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "OUTDOOR BANQUET",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "BANQUET HALL"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_84A54037_96D9_B136_41E1_6092F5C12CAB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "BANQUET HALL",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "SWIMMING POOL VIEW"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_84F01381_96D9_B7CA_41E1_C83679F62CC0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "SWIMMING POOL VIEW",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, true, 0, null, null, false); this.setComponentVisibility(this.Button_84F01381_96D9_B7CA_41E1_C83679F62CC0, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "MULTIPURPOSE VOURT VIEW"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_87D437FB_96D9_BF3E_41DA_F284E23B89FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "MULTIPURPOSE COURT VIEW",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "SENIOR CITIZEN KIDS PLAY AREA"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_8772F6B4_96D8_71CA_41B6_660C58E10F56",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "SENIOR CITIZEN / KIDS PLAY AREA",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "SPA"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_8347FED9_96C8_F17A_41D9_2F667C359BE7",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "SPA",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "GYMNASIUM VIEW"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_838E154C_96C8_B35A_41B3_2583588D33B4",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "GYMNASIUM VIEW 01",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "GYMNASIUM VIEW 02"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_83AED5F5_96C8_B34A_41C6_80988921DACB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "GYMNASIUM VIEW 02",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "DECK VIEW 01"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_83D4468C_96C8_B1DA_41D7_3FB547C2A87E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "DECK VIEW 01",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "DECK VIEW 02"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_83FB973C_96C8_BF3A_41DF_7DD1B0C87673",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "DECK VIEW 02",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "DECK VIEW 03"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_831657F2_96C8_BF49_41E2_6BE821210FDC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "DECK VIEW 03",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "LIBRARY"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_833108AA_96C8_B1DE_41C0_EFA626EB097F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "LIBRARY",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "HOME THEATRE"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_83CDAE49_96C9_F15A_41D9_A44627E43E7E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "HOME THEATRE",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "SKY DECK TURF"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_83F00537_96C9_D336_41D1_9FEA067BA7D8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "SKY DECK TURF",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Myanmar Text",
 "rollOverBackgroundOpacity": 0,
 "fontWeight": "normal",
 "data": {
  "name": "SKY DECK LOBBY"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_8316F870_96C9_D14A_41D1_6B0387751CB9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "rollOverFontSize": "18px",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "label": "SKY DECK LOBBY",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 0,
 "click": "this.setComponentVisibility(this.Container_8FE4B364_9648_574A_41D9_DE1B1E7EB871, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D02A5AA_964B_B3DE_41D2_052BDE1CCB11, true, 0, null, null, false); this.setComponentVisibility(this.Container_8DFB2262_9657_D14E_41D7_A362A06D0BA1, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D85A4C2_9678_714E_41CC_8F120B1226BD, true, 0, null, null, false); this.setComponentVisibility(this.Container_990D6A1F_9657_F0F6_41DD_AF343E7EEA81, true, 0, null, null, false); this.setComponentVisibility(this.Image_8D5FF424_97C8_B0CA_41C6_FB436C79BED9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D082DA9_97C8_53DB_41C3_8604B5F57F01, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D0C7C74_97B8_D14A_41DD_FBC96A94A0F3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D1EA61F_97B8_D0F6_41C5_65128B98403D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D70393C_97C9_D33A_41D2_E44E7525B6B3, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D223C3D_97C8_D13A_41D1_18CA944D7FF6, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D71E043_97C8_514D_41B5_AC85A16448DF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D324245_9648_714A_41CD_F081F35639A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D72F393_9648_77CF_41E0_EA154027863D, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D500274_964B_B149_41BB_B2AEBF93BFC7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D618465_9648_D14A_41E2_1ADD8C0EE598, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D52AB47_97C8_B756_41D7_0F31F0E987CF, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8AEEF_97B8_5156_41D6_E448F3D1B0D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8E936A3E_97C8_B136_41CB_01E6458751D9, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D69569A_97C8_B1F9_41D5_5C4E76116D7B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB81024_97C8_D0CA_41BB_E94DBDEACB32, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D75F982_97B8_D3CE_41CB_8D36F952A023, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D8C42FB_97B9_B13E_41A7_DB8E6BE88CEA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D2F06A0_9648_71C9_41D5_01A0F07C80F0, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE6EF1C_9648_D0FA_41DF_12EE904E887C, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4BD72E_9649_B0D6_41DB_39234FC3DE63, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DF46AF7_9648_5136_41C5_12412F61A5FC, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DD08A36_9648_F136_41E1_9B06325400A5, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C4E464D_9658_515A_41B6_ED096D5D2D37, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C62968D_9678_F1DA_41D0_90728AA1485B, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C44ED95_965B_D3F5_41E1_ADBEB059811E, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE8928C_9678_F1DA_41DC_01AF17D2936A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D300F78_9648_4F3A_41D9_C6ACDE0F9167, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C220872_9678_B14E_41E2_4F8F7704D640, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDB7756_967F_BF76_419D_FAAB46A029DA, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DC0BD0B_9648_70DF_41CE_065C1D1996E7, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DDDC717_964B_D0F6_41B9_BE276AF6CF8A, false, 0, null, null, false); this.setComponentVisibility(this.Image_8D7D9890_9659_D1CA_41C1_A0488B778487, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C5FE1B6_9658_5336_41DC_F314E7B387A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DE480AD_9648_51DA_41D5_25D724414130, false, 0, null, null, false); this.setComponentVisibility(this.Image_8DB58851_9648_714A_41D8_D44B8C4C4348, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C388403_9648_50CE_41C5_C70D7EBDA9A2, false, 0, null, null, false); this.setComponentVisibility(this.Image_8C7197CF_9678_DF56_41E0_B66D6C1939B1, false, 0, null, null, false); this.setComponentVisibility(this.Container_A065A469_B10D_2F37_41E4_5EB4DA739220, false, 0, null, null, false); this.setComponentVisibility(this.Container_AF276327_BF94_FBB5_41D6_43239C1D2088, false, 0, null, null, false)",
 "class": "Button",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "fontSize": "16.039500000000004px",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "shadowBlurRadius": 15
}],
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "height": "100%",
 "class": "Player",
 "paddingBottom": 0,
 "data": {
  "name": "Player518"
 },
 "shadow": false,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
