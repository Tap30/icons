<template>
  <div class="icon-grid">
		<IconPreview
			v-if="'alarm-clock'.includes(search) && (!page?.params?.category || config['alarm-clock']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="alarm-clock"
		>
			<tap-icon-alarm-clock></tap-icon-alarm-clock>
		</IconPreview>
		<IconPreview
			v-if="'alarm-clock-fill'.includes(search) && (!page?.params?.category || config['alarm-clock-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="alarm-clock-fill"
		>
			<tap-icon-alarm-clock-fill></tap-icon-alarm-clock-fill>
		</IconPreview>
		<IconPreview
			v-if="'arrow-top-right'.includes(search) && (!page?.params?.category || config['arrow-top-right']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="arrow-top-right"
		>
			<tap-icon-arrow-top-right></tap-icon-arrow-top-right>
		</IconPreview>
		<IconPreview
			v-if="'arrow-top-right-fill'.includes(search) && (!page?.params?.category || config['arrow-top-right-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="arrow-top-right-fill"
		>
			<tap-icon-arrow-top-right-fill></tap-icon-arrow-top-right-fill>
		</IconPreview>
		<IconPreview
			v-if="'arrow-top-right-question'.includes(search) && (!page?.params?.category || config['arrow-top-right-question']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="arrow-top-right-question"
		>
			<tap-icon-arrow-top-right-question></tap-icon-arrow-top-right-question>
		</IconPreview>
		<IconPreview
			v-if="'arrow-top-right-question-fill'.includes(search) && (!page?.params?.category || config['arrow-top-right-question-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="arrow-top-right-question-fill"
		>
			<tap-icon-arrow-top-right-question-fill></tap-icon-arrow-top-right-question-fill>
		</IconPreview>
		<IconPreview
			v-if="'banknote'.includes(search) && (!page?.params?.category || config['banknote']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="banknote"
		>
			<tap-icon-banknote></tap-icon-banknote>
		</IconPreview>
		<IconPreview
			v-if="'banknote-fill'.includes(search) && (!page?.params?.category || config['banknote-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="banknote-fill"
		>
			<tap-icon-banknote-fill></tap-icon-banknote-fill>
		</IconPreview>
		<IconPreview
			v-if="'banknote-two'.includes(search) && (!page?.params?.category || config['banknote-two']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="banknote-two"
		>
			<tap-icon-banknote-two></tap-icon-banknote-two>
		</IconPreview>
		<IconPreview
			v-if="'banknote-two-fill'.includes(search) && (!page?.params?.category || config['banknote-two-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="banknote-two-fill"
		>
			<tap-icon-banknote-two-fill></tap-icon-banknote-two-fill>
		</IconPreview>
		<IconPreview
			v-if="'bell'.includes(search) && (!page?.params?.category || config['bell']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="bell"
		>
			<tap-icon-bell></tap-icon-bell>
		</IconPreview>
		<IconPreview
			v-if="'bell-dot-fill'.includes(search) && (!page?.params?.category || config['bell-dot-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="bell-dot-fill"
		>
			<tap-icon-bell-dot-fill></tap-icon-bell-dot-fill>
		</IconPreview>
		<IconPreview
			v-if="'bell-fill'.includes(search) && (!page?.params?.category || config['bell-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="bell-fill"
		>
			<tap-icon-bell-fill></tap-icon-bell-fill>
		</IconPreview>
		<IconPreview
			v-if="'bookmark'.includes(search) && (!page?.params?.category || config['bookmark']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="bookmark"
		>
			<tap-icon-bookmark></tap-icon-bookmark>
		</IconPreview>
		<IconPreview
			v-if="'bookmark-fill'.includes(search) && (!page?.params?.category || config['bookmark-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="bookmark-fill"
		>
			<tap-icon-bookmark-fill></tap-icon-bookmark-fill>
		</IconPreview>
		<IconPreview
			v-if="'box'.includes(search) && (!page?.params?.category || config['box']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="box"
		>
			<tap-icon-box></tap-icon-box>
		</IconPreview>
		<IconPreview
			v-if="'box-check'.includes(search) && (!page?.params?.category || config['box-check']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="box-check"
		>
			<tap-icon-box-check></tap-icon-box-check>
		</IconPreview>
		<IconPreview
			v-if="'box-fill'.includes(search) && (!page?.params?.category || config['box-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="box-fill"
		>
			<tap-icon-box-fill></tap-icon-box-fill>
		</IconPreview>
		<IconPreview
			v-if="'briefcase'.includes(search) && (!page?.params?.category || config['briefcase']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="briefcase"
		>
			<tap-icon-briefcase></tap-icon-briefcase>
		</IconPreview>
		<IconPreview
			v-if="'briefcase-fill'.includes(search) && (!page?.params?.category || config['briefcase-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="briefcase-fill"
		>
			<tap-icon-briefcase-fill></tap-icon-briefcase-fill>
		</IconPreview>
		<IconPreview
			v-if="'building'.includes(search) && (!page?.params?.category || config['building']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="building"
		>
			<tap-icon-building></tap-icon-building>
		</IconPreview>
		<IconPreview
			v-if="'building-fill'.includes(search) && (!page?.params?.category || config['building-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="building-fill"
		>
			<tap-icon-building-fill></tap-icon-building-fill>
		</IconPreview>
		<IconPreview
			v-if="'calendar'.includes(search) && (!page?.params?.category || config['calendar']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="calendar"
		>
			<tap-icon-calendar></tap-icon-calendar>
		</IconPreview>
		<IconPreview
			v-if="'calendar-fill'.includes(search) && (!page?.params?.category || config['calendar-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="calendar-fill"
		>
			<tap-icon-calendar-fill></tap-icon-calendar-fill>
		</IconPreview>
		<IconPreview
			v-if="'call-dialog-box'.includes(search) && (!page?.params?.category || config['call-dialog-box']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="call-dialog-box"
		>
			<tap-icon-call-dialog-box></tap-icon-call-dialog-box>
		</IconPreview>
		<IconPreview
			v-if="'call-left'.includes(search) && (!page?.params?.category || config['call-left']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="call-left"
		>
			<tap-icon-call-left></tap-icon-call-left>
		</IconPreview>
		<IconPreview
			v-if="'call-left-slash'.includes(search) && (!page?.params?.category || config['call-left-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="call-left-slash"
		>
			<tap-icon-call-left-slash></tap-icon-call-left-slash>
		</IconPreview>
		<IconPreview
			v-if="'call-righ'.includes(search) && (!page?.params?.category || config['call-righ']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="call-righ"
		>
			<tap-icon-call-righ></tap-icon-call-righ>
		</IconPreview>
		<IconPreview
			v-if="'call-right-slash'.includes(search) && (!page?.params?.category || config['call-right-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="call-right-slash"
		>
			<tap-icon-call-right-slash></tap-icon-call-right-slash>
		</IconPreview>
		<IconPreview
			v-if="'camera'.includes(search) && (!page?.params?.category || config['camera']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="camera"
		>
			<tap-icon-camera></tap-icon-camera>
		</IconPreview>
		<IconPreview
			v-if="'camera-fill'.includes(search) && (!page?.params?.category || config['camera-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="camera-fill"
		>
			<tap-icon-camera-fill></tap-icon-camera-fill>
		</IconPreview>
		<IconPreview
			v-if="'camera-plus'.includes(search) && (!page?.params?.category || config['camera-plus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="camera-plus"
		>
			<tap-icon-camera-plus></tap-icon-camera-plus>
		</IconPreview>
		<IconPreview
			v-if="'car'.includes(search) && (!page?.params?.category || config['car']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car"
		>
			<tap-icon-car></tap-icon-car>
		</IconPreview>
		<IconPreview
			v-if="'car-clock'.includes(search) && (!page?.params?.category || config['car-clock']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car-clock"
		>
			<tap-icon-car-clock></tap-icon-car-clock>
		</IconPreview>
		<IconPreview
			v-if="'car-clock-fill'.includes(search) && (!page?.params?.category || config['car-clock-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car-clock-fill"
		>
			<tap-icon-car-clock-fill></tap-icon-car-clock-fill>
		</IconPreview>
		<IconPreview
			v-if="'car-fill'.includes(search) && (!page?.params?.category || config['car-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car-fill"
		>
			<tap-icon-car-fill></tap-icon-car-fill>
		</IconPreview>
		<IconPreview
			v-if="'car-slash'.includes(search) && (!page?.params?.category || config['car-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car-slash"
		>
			<tap-icon-car-slash></tap-icon-car-slash>
		</IconPreview>
		<IconPreview
			v-if="'car-slash-fill'.includes(search) && (!page?.params?.category || config['car-slash-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car-slash-fill"
		>
			<tap-icon-car-slash-fill></tap-icon-car-slash-fill>
		</IconPreview>
		<IconPreview
			v-if="'car-spark'.includes(search) && (!page?.params?.category || config['car-spark']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="car-spark"
		>
			<tap-icon-car-spark></tap-icon-car-spark>
		</IconPreview>
		<IconPreview
			v-if="'card'.includes(search) && (!page?.params?.category || config['card']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card"
		>
			<tap-icon-card></tap-icon-card>
		</IconPreview>
		<IconPreview
			v-if="'card-fill'.includes(search) && (!page?.params?.category || config['card-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-fill"
		>
			<tap-icon-card-fill></tap-icon-card-fill>
		</IconPreview>
		<IconPreview
			v-if="'card-left-arrow'.includes(search) && (!page?.params?.category || config['card-left-arrow']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-left-arrow"
		>
			<tap-icon-card-left-arrow></tap-icon-card-left-arrow>
		</IconPreview>
		<IconPreview
			v-if="'card-left-arrow-fill'.includes(search) && (!page?.params?.category || config['card-left-arrow-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-left-arrow-fill"
		>
			<tap-icon-card-left-arrow-fill></tap-icon-card-left-arrow-fill>
		</IconPreview>
		<IconPreview
			v-if="'card-plus'.includes(search) && (!page?.params?.category || config['card-plus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-plus"
		>
			<tap-icon-card-plus></tap-icon-card-plus>
		</IconPreview>
		<IconPreview
			v-if="'card-plus-fill'.includes(search) && (!page?.params?.category || config['card-plus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-plus-fill"
		>
			<tap-icon-card-plus-fill></tap-icon-card-plus-fill>
		</IconPreview>
		<IconPreview
			v-if="'card-right-arrow'.includes(search) && (!page?.params?.category || config['card-right-arrow']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-right-arrow"
		>
			<tap-icon-card-right-arrow></tap-icon-card-right-arrow>
		</IconPreview>
		<IconPreview
			v-if="'card-right-arrow-fill'.includes(search) && (!page?.params?.category || config['card-right-arrow-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-right-arrow-fill"
		>
			<tap-icon-card-right-arrow-fill></tap-icon-card-right-arrow-fill>
		</IconPreview>
		<IconPreview
			v-if="'card-spark'.includes(search) && (!page?.params?.category || config['card-spark']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-spark"
		>
			<tap-icon-card-spark></tap-icon-card-spark>
		</IconPreview>
		<IconPreview
			v-if="'card-spark-fill'.includes(search) && (!page?.params?.category || config['card-spark-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-spark-fill"
		>
			<tap-icon-card-spark-fill></tap-icon-card-spark-fill>
		</IconPreview>
		<IconPreview
			v-if="'card-time'.includes(search) && (!page?.params?.category || config['card-time']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-time"
		>
			<tap-icon-card-time></tap-icon-card-time>
		</IconPreview>
		<IconPreview
			v-if="'card-time-fill'.includes(search) && (!page?.params?.category || config['card-time-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="card-time-fill"
		>
			<tap-icon-card-time-fill></tap-icon-card-time-fill>
		</IconPreview>
		<IconPreview
			v-if="'check'.includes(search) && (!page?.params?.category || config['check']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="check"
		>
			<tap-icon-check></tap-icon-check>
		</IconPreview>
		<IconPreview
			v-if="'check-fill'.includes(search) && (!page?.params?.category || config['check-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="check-fill"
		>
			<tap-icon-check-fill></tap-icon-check-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-check'.includes(search) && (!page?.params?.category || config['circle-check']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-check"
		>
			<tap-icon-circle-check></tap-icon-circle-check>
		</IconPreview>
		<IconPreview
			v-if="'circle-check-fill'.includes(search) && (!page?.params?.category || config['circle-check-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-check-fill"
		>
			<tap-icon-circle-check-fill></tap-icon-circle-check-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-check-small'.includes(search) && (!page?.params?.category || config['circle-check-small']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-check-small"
		>
			<tap-icon-circle-check-small></tap-icon-circle-check-small>
		</IconPreview>
		<IconPreview
			v-if="'circle-check-small-fill'.includes(search) && (!page?.params?.category || config['circle-check-small-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-check-small-fill"
		>
			<tap-icon-circle-check-small-fill></tap-icon-circle-check-small-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-cross'.includes(search) && (!page?.params?.category || config['circle-cross']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-cross"
		>
			<tap-icon-circle-cross></tap-icon-circle-cross>
		</IconPreview>
		<IconPreview
			v-if="'circle-cross-fill'.includes(search) && (!page?.params?.category || config['circle-cross-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-cross-fill"
		>
			<tap-icon-circle-cross-fill></tap-icon-circle-cross-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-exclamation'.includes(search) && (!page?.params?.category || config['circle-exclamation']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-exclamation"
		>
			<tap-icon-circle-exclamation></tap-icon-circle-exclamation>
		</IconPreview>
		<IconPreview
			v-if="'circle-exclamation-fill'.includes(search) && (!page?.params?.category || config['circle-exclamation-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-exclamation-fill"
		>
			<tap-icon-circle-exclamation-fill></tap-icon-circle-exclamation-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-1'.includes(search) && (!page?.params?.category || config['circle-fill-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-1"
		>
			<tap-icon-circle-fill-1></tap-icon-circle-fill-1>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-2'.includes(search) && (!page?.params?.category || config['circle-fill-2']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-2"
		>
			<tap-icon-circle-fill-2></tap-icon-circle-fill-2>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-3'.includes(search) && (!page?.params?.category || config['circle-fill-3']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-3"
		>
			<tap-icon-circle-fill-3></tap-icon-circle-fill-3>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-4'.includes(search) && (!page?.params?.category || config['circle-fill-4']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-4"
		>
			<tap-icon-circle-fill-4></tap-icon-circle-fill-4>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-5'.includes(search) && (!page?.params?.category || config['circle-fill-5']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-5"
		>
			<tap-icon-circle-fill-5></tap-icon-circle-fill-5>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-6'.includes(search) && (!page?.params?.category || config['circle-fill-6']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-6"
		>
			<tap-icon-circle-fill-6></tap-icon-circle-fill-6>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-7'.includes(search) && (!page?.params?.category || config['circle-fill-7']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-7"
		>
			<tap-icon-circle-fill-7></tap-icon-circle-fill-7>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-8'.includes(search) && (!page?.params?.category || config['circle-fill-8']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-8"
		>
			<tap-icon-circle-fill-8></tap-icon-circle-fill-8>
		</IconPreview>
		<IconPreview
			v-if="'circle-fill-9'.includes(search) && (!page?.params?.category || config['circle-fill-9']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-fill-9"
		>
			<tap-icon-circle-fill-9></tap-icon-circle-fill-9>
		</IconPreview>
		<IconPreview
			v-if="'circle-information'.includes(search) && (!page?.params?.category || config['circle-information']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-information"
		>
			<tap-icon-circle-information></tap-icon-circle-information>
		</IconPreview>
		<IconPreview
			v-if="'circle-information-fill'.includes(search) && (!page?.params?.category || config['circle-information-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-information-fill"
		>
			<tap-icon-circle-information-fill></tap-icon-circle-information-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-minus'.includes(search) && (!page?.params?.category || config['circle-minus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-minus"
		>
			<tap-icon-circle-minus></tap-icon-circle-minus>
		</IconPreview>
		<IconPreview
			v-if="'circle-minus-fill'.includes(search) && (!page?.params?.category || config['circle-minus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-minus-fill"
		>
			<tap-icon-circle-minus-fill></tap-icon-circle-minus-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-more-fill'.includes(search) && (!page?.params?.category || config['circle-more-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-more-fill"
		>
			<tap-icon-circle-more-fill></tap-icon-circle-more-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-1'.includes(search) && (!page?.params?.category || config['circle-outline-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-1"
		>
			<tap-icon-circle-outline-1></tap-icon-circle-outline-1>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-2'.includes(search) && (!page?.params?.category || config['circle-outline-2']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-2"
		>
			<tap-icon-circle-outline-2></tap-icon-circle-outline-2>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-3'.includes(search) && (!page?.params?.category || config['circle-outline-3']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-3"
		>
			<tap-icon-circle-outline-3></tap-icon-circle-outline-3>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-4'.includes(search) && (!page?.params?.category || config['circle-outline-4']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-4"
		>
			<tap-icon-circle-outline-4></tap-icon-circle-outline-4>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-5'.includes(search) && (!page?.params?.category || config['circle-outline-5']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-5"
		>
			<tap-icon-circle-outline-5></tap-icon-circle-outline-5>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-6'.includes(search) && (!page?.params?.category || config['circle-outline-6']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-6"
		>
			<tap-icon-circle-outline-6></tap-icon-circle-outline-6>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-7'.includes(search) && (!page?.params?.category || config['circle-outline-7']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-7"
		>
			<tap-icon-circle-outline-7></tap-icon-circle-outline-7>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-8'.includes(search) && (!page?.params?.category || config['circle-outline-8']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-8"
		>
			<tap-icon-circle-outline-8></tap-icon-circle-outline-8>
		</IconPreview>
		<IconPreview
			v-if="'circle-outline-9'.includes(search) && (!page?.params?.category || config['circle-outline-9']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-outline-9"
		>
			<tap-icon-circle-outline-9></tap-icon-circle-outline-9>
		</IconPreview>
		<IconPreview
			v-if="'circle-person'.includes(search) && (!page?.params?.category || config['circle-person']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-person"
		>
			<tap-icon-circle-person></tap-icon-circle-person>
		</IconPreview>
		<IconPreview
			v-if="'circle-person-fill'.includes(search) && (!page?.params?.category || config['circle-person-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-person-fill"
		>
			<tap-icon-circle-person-fill></tap-icon-circle-person-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-person-fill-1'.includes(search) && (!page?.params?.category || config['circle-person-fill-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-person-fill-1"
		>
			<tap-icon-circle-person-fill-1></tap-icon-circle-person-fill-1>
		</IconPreview>
		<IconPreview
			v-if="'circle-plus'.includes(search) && (!page?.params?.category || config['circle-plus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-plus"
		>
			<tap-icon-circle-plus></tap-icon-circle-plus>
		</IconPreview>
		<IconPreview
			v-if="'circle-plus-fill'.includes(search) && (!page?.params?.category || config['circle-plus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-plus-fill"
		>
			<tap-icon-circle-plus-fill></tap-icon-circle-plus-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-question-fill'.includes(search) && (!page?.params?.category || config['circle-question-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-question-fill"
		>
			<tap-icon-circle-question-fill></tap-icon-circle-question-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-star'.includes(search) && (!page?.params?.category || config['circle-star']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-star"
		>
			<tap-icon-circle-star></tap-icon-circle-star>
		</IconPreview>
		<IconPreview
			v-if="'circle-star-fill'.includes(search) && (!page?.params?.category || config['circle-star-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-star-fill"
		>
			<tap-icon-circle-star-fill></tap-icon-circle-star-fill>
		</IconPreview>
		<IconPreview
			v-if="'circle-thunder'.includes(search) && (!page?.params?.category || config['circle-thunder']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-thunder"
		>
			<tap-icon-circle-thunder></tap-icon-circle-thunder>
		</IconPreview>
		<IconPreview
			v-if="'circle-thunder-fill'.includes(search) && (!page?.params?.category || config['circle-thunder-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="circle-thunder-fill"
		>
			<tap-icon-circle-thunder-fill></tap-icon-circle-thunder-fill>
		</IconPreview>
		<IconPreview
			v-if="'clipboard-clock'.includes(search) && (!page?.params?.category || config['clipboard-clock']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clipboard-clock"
		>
			<tap-icon-clipboard-clock></tap-icon-clipboard-clock>
		</IconPreview>
		<IconPreview
			v-if="'clipboard-clock-fill'.includes(search) && (!page?.params?.category || config['clipboard-clock-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clipboard-clock-fill"
		>
			<tap-icon-clipboard-clock-fill></tap-icon-clipboard-clock-fill>
		</IconPreview>
		<IconPreview
			v-if="'clips-together'.includes(search) && (!page?.params?.category || config['clips-together']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clips-together"
		>
			<tap-icon-clips-together></tap-icon-clips-together>
		</IconPreview>
		<IconPreview
			v-if="'clock'.includes(search) && (!page?.params?.category || config['clock']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clock"
		>
			<tap-icon-clock></tap-icon-clock>
		</IconPreview>
		<IconPreview
			v-if="'clock-arrow-circlepath'.includes(search) && (!page?.params?.category || config['clock-arrow-circlepath']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clock-arrow-circlepath"
		>
			<tap-icon-clock-arrow-circlepath></tap-icon-clock-arrow-circlepath>
		</IconPreview>
		<IconPreview
			v-if="'clock-dashed'.includes(search) && (!page?.params?.category || config['clock-dashed']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clock-dashed"
		>
			<tap-icon-clock-dashed></tap-icon-clock-dashed>
		</IconPreview>
		<IconPreview
			v-if="'clock-fill'.includes(search) && (!page?.params?.category || config['clock-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clock-fill"
		>
			<tap-icon-clock-fill></tap-icon-clock-fill>
		</IconPreview>
		<IconPreview
			v-if="'clock-small'.includes(search) && (!page?.params?.category || config['clock-small']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clock-small"
		>
			<tap-icon-clock-small></tap-icon-clock-small>
		</IconPreview>
		<IconPreview
			v-if="'clock-small-fill'.includes(search) && (!page?.params?.category || config['clock-small-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="clock-small-fill"
		>
			<tap-icon-clock-small-fill></tap-icon-clock-small-fill>
		</IconPreview>
		<IconPreview
			v-if="'copy'.includes(search) && (!page?.params?.category || config['copy']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="copy"
		>
			<tap-icon-copy></tap-icon-copy>
		</IconPreview>
		<IconPreview
			v-if="'copy-fill'.includes(search) && (!page?.params?.category || config['copy-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="copy-fill"
		>
			<tap-icon-copy-fill></tap-icon-copy-fill>
		</IconPreview>
		<IconPreview
			v-if="'coupon'.includes(search) && (!page?.params?.category || config['coupon']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="coupon"
		>
			<tap-icon-coupon></tap-icon-coupon>
		</IconPreview>
		<IconPreview
			v-if="'coupon-fill'.includes(search) && (!page?.params?.category || config['coupon-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="coupon-fill"
		>
			<tap-icon-coupon-fill></tap-icon-coupon-fill>
		</IconPreview>
		<IconPreview
			v-if="'coupon-puched'.includes(search) && (!page?.params?.category || config['coupon-puched']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="coupon-puched"
		>
			<tap-icon-coupon-puched></tap-icon-coupon-puched>
		</IconPreview>
		<IconPreview
			v-if="'coupon-puched-fill'.includes(search) && (!page?.params?.category || config['coupon-puched-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="coupon-puched-fill"
		>
			<tap-icon-coupon-puched-fill></tap-icon-coupon-puched-fill>
		</IconPreview>
		<IconPreview
			v-if="'cross'.includes(search) && (!page?.params?.category || config['cross']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="cross"
		>
			<tap-icon-cross></tap-icon-cross>
		</IconPreview>
		<IconPreview
			v-if="'cross-fill'.includes(search) && (!page?.params?.category || config['cross-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="cross-fill"
		>
			<tap-icon-cross-fill></tap-icon-cross-fill>
		</IconPreview>
		<IconPreview
			v-if="'default'.includes(search) && (!page?.params?.category || config['default']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default"
		>
			<tap-icon-default></tap-icon-default>
		</IconPreview>
		<IconPreview
			v-if="'default-1'.includes(search) && (!page?.params?.category || config['default-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-1"
		>
			<tap-icon-default-1></tap-icon-default-1>
		</IconPreview>
		<IconPreview
			v-if="'default-2'.includes(search) && (!page?.params?.category || config['default-2']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-2"
		>
			<tap-icon-default-2></tap-icon-default-2>
		</IconPreview>
		<IconPreview
			v-if="'default-3'.includes(search) && (!page?.params?.category || config['default-3']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-3"
		>
			<tap-icon-default-3></tap-icon-default-3>
		</IconPreview>
		<IconPreview
			v-if="'default-4'.includes(search) && (!page?.params?.category || config['default-4']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-4"
		>
			<tap-icon-default-4></tap-icon-default-4>
		</IconPreview>
		<IconPreview
			v-if="'default-5'.includes(search) && (!page?.params?.category || config['default-5']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-5"
		>
			<tap-icon-default-5></tap-icon-default-5>
		</IconPreview>
		<IconPreview
			v-if="'default-6'.includes(search) && (!page?.params?.category || config['default-6']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-6"
		>
			<tap-icon-default-6></tap-icon-default-6>
		</IconPreview>
		<IconPreview
			v-if="'default-7'.includes(search) && (!page?.params?.category || config['default-7']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-7"
		>
			<tap-icon-default-7></tap-icon-default-7>
		</IconPreview>
		<IconPreview
			v-if="'default-8'.includes(search) && (!page?.params?.category || config['default-8']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-8"
		>
			<tap-icon-default-8></tap-icon-default-8>
		</IconPreview>
		<IconPreview
			v-if="'default-9'.includes(search) && (!page?.params?.category || config['default-9']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-9"
		>
			<tap-icon-default-9></tap-icon-default-9>
		</IconPreview>
		<IconPreview
			v-if="'default-fill'.includes(search) && (!page?.params?.category || config['default-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="default-fill"
		>
			<tap-icon-default-fill></tap-icon-default-fill>
		</IconPreview>
		<IconPreview
			v-if="'dialog-box-text'.includes(search) && (!page?.params?.category || config['dialog-box-text']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="dialog-box-text"
		>
			<tap-icon-dialog-box-text></tap-icon-dialog-box-text>
		</IconPreview>
		<IconPreview
			v-if="'dialog-box-text-fill'.includes(search) && (!page?.params?.category || config['dialog-box-text-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="dialog-box-text-fill"
		>
			<tap-icon-dialog-box-text-fill></tap-icon-dialog-box-text-fill>
		</IconPreview>
		<IconPreview
			v-if="'dialogbox-question'.includes(search) && (!page?.params?.category || config['dialogbox-question']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="dialogbox-question"
		>
			<tap-icon-dialogbox-question></tap-icon-dialogbox-question>
		</IconPreview>
		<IconPreview
			v-if="'diamond-arrow-turn-right'.includes(search) && (!page?.params?.category || config['diamond-arrow-turn-right']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="diamond-arrow-turn-right"
		>
			<tap-icon-diamond-arrow-turn-right></tap-icon-diamond-arrow-turn-right>
		</IconPreview>
		<IconPreview
			v-if="'diamond-arrow-turn-right-1'.includes(search) && (!page?.params?.category || config['diamond-arrow-turn-right-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="diamond-arrow-turn-right-1"
		>
			<tap-icon-diamond-arrow-turn-right-1></tap-icon-diamond-arrow-turn-right-1>
		</IconPreview>
		<IconPreview
			v-if="'dot-fill'.includes(search) && (!page?.params?.category || config['dot-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="dot-fill"
		>
			<tap-icon-dot-fill></tap-icon-dot-fill>
		</IconPreview>
		<IconPreview
			v-if="'double-check'.includes(search) && (!page?.params?.category || config['double-check']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="double-check"
		>
			<tap-icon-double-check></tap-icon-double-check>
		</IconPreview>
		<IconPreview
			v-if="'ear-slash'.includes(search) && (!page?.params?.category || config['ear-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="ear-slash"
		>
			<tap-icon-ear-slash></tap-icon-ear-slash>
		</IconPreview>
		<IconPreview
			v-if="'envelope'.includes(search) && (!page?.params?.category || config['envelope']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="envelope"
		>
			<tap-icon-envelope></tap-icon-envelope>
		</IconPreview>
		<IconPreview
			v-if="'envelope-fill'.includes(search) && (!page?.params?.category || config['envelope-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="envelope-fill"
		>
			<tap-icon-envelope-fill></tap-icon-envelope-fill>
		</IconPreview>
		<IconPreview
			v-if="'envelope-open'.includes(search) && (!page?.params?.category || config['envelope-open']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="envelope-open"
		>
			<tap-icon-envelope-open></tap-icon-envelope-open>
		</IconPreview>
		<IconPreview
			v-if="'envelope-open-fill'.includes(search) && (!page?.params?.category || config['envelope-open-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="envelope-open-fill"
		>
			<tap-icon-envelope-open-fill></tap-icon-envelope-open-fill>
		</IconPreview>
		<IconPreview
			v-if="'exclamation'.includes(search) && (!page?.params?.category || config['exclamation']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="exclamation"
		>
			<tap-icon-exclamation></tap-icon-exclamation>
		</IconPreview>
		<IconPreview
			v-if="'exclamation-fill'.includes(search) && (!page?.params?.category || config['exclamation-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="exclamation-fill"
		>
			<tap-icon-exclamation-fill></tap-icon-exclamation-fill>
		</IconPreview>
		<IconPreview
			v-if="'eye'.includes(search) && (!page?.params?.category || config['eye']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="eye"
		>
			<tap-icon-eye></tap-icon-eye>
		</IconPreview>
		<IconPreview
			v-if="'eye-fill'.includes(search) && (!page?.params?.category || config['eye-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="eye-fill"
		>
			<tap-icon-eye-fill></tap-icon-eye-fill>
		</IconPreview>
		<IconPreview
			v-if="'eye-slash'.includes(search) && (!page?.params?.category || config['eye-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="eye-slash"
		>
			<tap-icon-eye-slash></tap-icon-eye-slash>
		</IconPreview>
		<IconPreview
			v-if="'eye-slash-fill'.includes(search) && (!page?.params?.category || config['eye-slash-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="eye-slash-fill"
		>
			<tap-icon-eye-slash-fill></tap-icon-eye-slash-fill>
		</IconPreview>
		<IconPreview
			v-if="'face-sad'.includes(search) && (!page?.params?.category || config['face-sad']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="face-sad"
		>
			<tap-icon-face-sad></tap-icon-face-sad>
		</IconPreview>
		<IconPreview
			v-if="'face-sad-fill'.includes(search) && (!page?.params?.category || config['face-sad-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="face-sad-fill"
		>
			<tap-icon-face-sad-fill></tap-icon-face-sad-fill>
		</IconPreview>
		<IconPreview
			v-if="'face-smile'.includes(search) && (!page?.params?.category || config['face-smile']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="face-smile"
		>
			<tap-icon-face-smile></tap-icon-face-smile>
		</IconPreview>
		<IconPreview
			v-if="'face-smile-fill'.includes(search) && (!page?.params?.category || config['face-smile-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="face-smile-fill"
		>
			<tap-icon-face-smile-fill></tap-icon-face-smile-fill>
		</IconPreview>
		<IconPreview
			v-if="'finger-left-fill'.includes(search) && (!page?.params?.category || config['finger-left-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="finger-left-fill"
		>
			<tap-icon-finger-left-fill></tap-icon-finger-left-fill>
		</IconPreview>
		<IconPreview
			v-if="'finger-swipe-vertical'.includes(search) && (!page?.params?.category || config['finger-swipe-vertical']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="finger-swipe-vertical"
		>
			<tap-icon-finger-swipe-vertical></tap-icon-finger-swipe-vertical>
		</IconPreview>
		<IconPreview
			v-if="'finger-touch'.includes(search) && (!page?.params?.category || config['finger-touch']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="finger-touch"
		>
			<tap-icon-finger-touch></tap-icon-finger-touch>
		</IconPreview>
		<IconPreview
			v-if="'finger-up-fill'.includes(search) && (!page?.params?.category || config['finger-up-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="finger-up-fill"
		>
			<tap-icon-finger-up-fill></tap-icon-finger-up-fill>
		</IconPreview>
		<IconPreview
			v-if="'fire'.includes(search) && (!page?.params?.category || config['fire']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="fire"
		>
			<tap-icon-fire></tap-icon-fire>
		</IconPreview>
		<IconPreview
			v-if="'fire-fill'.includes(search) && (!page?.params?.category || config['fire-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="fire-fill"
		>
			<tap-icon-fire-fill></tap-icon-fire-fill>
		</IconPreview>
		<IconPreview
			v-if="'flag'.includes(search) && (!page?.params?.category || config['flag']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="flag"
		>
			<tap-icon-flag></tap-icon-flag>
		</IconPreview>
		<IconPreview
			v-if="'flag-fill'.includes(search) && (!page?.params?.category || config['flag-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="flag-fill"
		>
			<tap-icon-flag-fill></tap-icon-flag-fill>
		</IconPreview>
		<IconPreview
			v-if="'gas-station'.includes(search) && (!page?.params?.category || config['gas-station']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="gas-station"
		>
			<tap-icon-gas-station></tap-icon-gas-station>
		</IconPreview>
		<IconPreview
			v-if="'gas-station-fill'.includes(search) && (!page?.params?.category || config['gas-station-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="gas-station-fill"
		>
			<tap-icon-gas-station-fill></tap-icon-gas-station-fill>
		</IconPreview>
		<IconPreview
			v-if="'gear'.includes(search) && (!page?.params?.category || config['gear']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="gear"
		>
			<tap-icon-gear></tap-icon-gear>
		</IconPreview>
		<IconPreview
			v-if="'gear-fill'.includes(search) && (!page?.params?.category || config['gear-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="gear-fill"
		>
			<tap-icon-gear-fill></tap-icon-gear-fill>
		</IconPreview>
		<IconPreview
			v-if="'gift'.includes(search) && (!page?.params?.category || config['gift']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="gift"
		>
			<tap-icon-gift></tap-icon-gift>
		</IconPreview>
		<IconPreview
			v-if="'graduation-cap'.includes(search) && (!page?.params?.category || config['graduation-cap']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="graduation-cap"
		>
			<tap-icon-graduation-cap></tap-icon-graduation-cap>
		</IconPreview>
		<IconPreview
			v-if="'graduation-cap-fill'.includes(search) && (!page?.params?.category || config['graduation-cap-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="graduation-cap-fill"
		>
			<tap-icon-graduation-cap-fill></tap-icon-graduation-cap-fill>
		</IconPreview>
		<IconPreview
			v-if="'headphone'.includes(search) && (!page?.params?.category || config['headphone']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="headphone"
		>
			<tap-icon-headphone></tap-icon-headphone>
		</IconPreview>
		<IconPreview
			v-if="'headphone-fill'.includes(search) && (!page?.params?.category || config['headphone-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="headphone-fill"
		>
			<tap-icon-headphone-fill></tap-icon-headphone-fill>
		</IconPreview>
		<IconPreview
			v-if="'heart'.includes(search) && (!page?.params?.category || config['heart']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="heart"
		>
			<tap-icon-heart></tap-icon-heart>
		</IconPreview>
		<IconPreview
			v-if="'heart-broken-fill'.includes(search) && (!page?.params?.category || config['heart-broken-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="heart-broken-fill"
		>
			<tap-icon-heart-broken-fill></tap-icon-heart-broken-fill>
		</IconPreview>
		<IconPreview
			v-if="'heart-fill'.includes(search) && (!page?.params?.category || config['heart-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="heart-fill"
		>
			<tap-icon-heart-fill></tap-icon-heart-fill>
		</IconPreview>
		<IconPreview
			v-if="'helmets'.includes(search) && (!page?.params?.category || config['helmets']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="helmets"
		>
			<tap-icon-helmets></tap-icon-helmets>
		</IconPreview>
		<IconPreview
			v-if="'helmets-fill'.includes(search) && (!page?.params?.category || config['helmets-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="helmets-fill"
		>
			<tap-icon-helmets-fill></tap-icon-helmets-fill>
		</IconPreview>
		<IconPreview
			v-if="'home'.includes(search) && (!page?.params?.category || config['home']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="home"
		>
			<tap-icon-home></tap-icon-home>
		</IconPreview>
		<IconPreview
			v-if="'home-fill'.includes(search) && (!page?.params?.category || config['home-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="home-fill"
		>
			<tap-icon-home-fill></tap-icon-home-fill>
		</IconPreview>
		<IconPreview
			v-if="'hourglass'.includes(search) && (!page?.params?.category || config['hourglass']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="hourglass"
		>
			<tap-icon-hourglass></tap-icon-hourglass>
		</IconPreview>
		<IconPreview
			v-if="'hourglass-fill'.includes(search) && (!page?.params?.category || config['hourglass-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="hourglass-fill"
		>
			<tap-icon-hourglass-fill></tap-icon-hourglass-fill>
		</IconPreview>
		<IconPreview
			v-if="'image'.includes(search) && (!page?.params?.category || config['image']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="image"
		>
			<tap-icon-image></tap-icon-image>
		</IconPreview>
		<IconPreview
			v-if="'image-fill'.includes(search) && (!page?.params?.category || config['image-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="image-fill"
		>
			<tap-icon-image-fill></tap-icon-image-fill>
		</IconPreview>
		<IconPreview
			v-if="'image-two'.includes(search) && (!page?.params?.category || config['image-two']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="image-two"
		>
			<tap-icon-image-two></tap-icon-image-two>
		</IconPreview>
		<IconPreview
			v-if="'image-two-fill'.includes(search) && (!page?.params?.category || config['image-two-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="image-two-fill"
		>
			<tap-icon-image-two-fill></tap-icon-image-two-fill>
		</IconPreview>
		<IconPreview
			v-if="'info'.includes(search) && (!page?.params?.category || config['info']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="info"
		>
			<tap-icon-info></tap-icon-info>
		</IconPreview>
		<IconPreview
			v-if="'info-fill'.includes(search) && (!page?.params?.category || config['info-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="info-fill"
		>
			<tap-icon-info-fill></tap-icon-info-fill>
		</IconPreview>
		<IconPreview
			v-if="'keyboard'.includes(search) && (!page?.params?.category || config['keyboard']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="keyboard"
		>
			<tap-icon-keyboard></tap-icon-keyboard>
		</IconPreview>
		<IconPreview
			v-if="'keyboard-fill'.includes(search) && (!page?.params?.category || config['keyboard-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="keyboard-fill"
		>
			<tap-icon-keyboard-fill></tap-icon-keyboard-fill>
		</IconPreview>
		<IconPreview
			v-if="'lamp-spark-fill'.includes(search) && (!page?.params?.category || config['lamp-spark-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="lamp-spark-fill"
		>
			<tap-icon-lamp-spark-fill></tap-icon-lamp-spark-fill>
		</IconPreview>
		<IconPreview
			v-if="'line-three'.includes(search) && (!page?.params?.category || config['line-three']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="line-three"
		>
			<tap-icon-line-three></tap-icon-line-three>
		</IconPreview>
		<IconPreview
			v-if="'line-three-horizontal-decrease'.includes(search) && (!page?.params?.category || config['line-three-horizontal-decrease']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="line-three-horizontal-decrease"
		>
			<tap-icon-line-three-horizontal-decrease></tap-icon-line-three-horizontal-decrease>
		</IconPreview>
		<IconPreview
			v-if="'list-bullet'.includes(search) && (!page?.params?.category || config['list-bullet']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="list-bullet"
		>
			<tap-icon-list-bullet></tap-icon-list-bullet>
		</IconPreview>
		<IconPreview
			v-if="'loading'.includes(search) && (!page?.params?.category || config['loading']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="loading"
		>
			<tap-icon-loading></tap-icon-loading>
		</IconPreview>
		<IconPreview
			v-if="'location-left'.includes(search) && (!page?.params?.category || config['location-left']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="location-left"
		>
			<tap-icon-location-left></tap-icon-location-left>
		</IconPreview>
		<IconPreview
			v-if="'location-up'.includes(search) && (!page?.params?.category || config['location-up']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="location-up"
		>
			<tap-icon-location-up></tap-icon-location-up>
		</IconPreview>
		<IconPreview
			v-if="'lock'.includes(search) && (!page?.params?.category || config['lock']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="lock"
		>
			<tap-icon-lock></tap-icon-lock>
		</IconPreview>
		<IconPreview
			v-if="'lock-fill'.includes(search) && (!page?.params?.category || config['lock-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="lock-fill"
		>
			<tap-icon-lock-fill></tap-icon-lock-fill>
		</IconPreview>
		<IconPreview
			v-if="'lock-small'.includes(search) && (!page?.params?.category || config['lock-small']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="lock-small"
		>
			<tap-icon-lock-small></tap-icon-lock-small>
		</IconPreview>
		<IconPreview
			v-if="'lock-small-fill'.includes(search) && (!page?.params?.category || config['lock-small-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="lock-small-fill"
		>
			<tap-icon-lock-small-fill></tap-icon-lock-small-fill>
		</IconPreview>
		<IconPreview
			v-if="'magnifier'.includes(search) && (!page?.params?.category || config['magnifier']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="magnifier"
		>
			<tap-icon-magnifier></tap-icon-magnifier>
		</IconPreview>
		<IconPreview
			v-if="'magnifier-fill'.includes(search) && (!page?.params?.category || config['magnifier-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="magnifier-fill"
		>
			<tap-icon-magnifier-fill></tap-icon-magnifier-fill>
		</IconPreview>
		<IconPreview
			v-if="'map'.includes(search) && (!page?.params?.category || config['map']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="map"
		>
			<tap-icon-map></tap-icon-map>
		</IconPreview>
		<IconPreview
			v-if="'map-fill'.includes(search) && (!page?.params?.category || config['map-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="map-fill"
		>
			<tap-icon-map-fill></tap-icon-map-fill>
		</IconPreview>
		<IconPreview
			v-if="'medal'.includes(search) && (!page?.params?.category || config['medal']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="medal"
		>
			<tap-icon-medal></tap-icon-medal>
		</IconPreview>
		<IconPreview
			v-if="'medal-1'.includes(search) && (!page?.params?.category || config['medal-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="medal-1"
		>
			<tap-icon-medal-1></tap-icon-medal-1>
		</IconPreview>
		<IconPreview
			v-if="'medal-fill'.includes(search) && (!page?.params?.category || config['medal-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="medal-fill"
		>
			<tap-icon-medal-fill></tap-icon-medal-fill>
		</IconPreview>
		<IconPreview
			v-if="'medal-fill-1'.includes(search) && (!page?.params?.category || config['medal-fill-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="medal-fill-1"
		>
			<tap-icon-medal-fill-1></tap-icon-medal-fill-1>
		</IconPreview>
		<IconPreview
			v-if="'microphone'.includes(search) && (!page?.params?.category || config['microphone']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="microphone"
		>
			<tap-icon-microphone></tap-icon-microphone>
		</IconPreview>
		<IconPreview
			v-if="'microphone-fill'.includes(search) && (!page?.params?.category || config['microphone-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="microphone-fill"
		>
			<tap-icon-microphone-fill></tap-icon-microphone-fill>
		</IconPreview>
		<IconPreview
			v-if="'microphone-slash'.includes(search) && (!page?.params?.category || config['microphone-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="microphone-slash"
		>
			<tap-icon-microphone-slash></tap-icon-microphone-slash>
		</IconPreview>
		<IconPreview
			v-if="'microphone-slash-fill'.includes(search) && (!page?.params?.category || config['microphone-slash-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="microphone-slash-fill"
		>
			<tap-icon-microphone-slash-fill></tap-icon-microphone-slash-fill>
		</IconPreview>
		<IconPreview
			v-if="'microphone-spark'.includes(search) && (!page?.params?.category || config['microphone-spark']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="microphone-spark"
		>
			<tap-icon-microphone-spark></tap-icon-microphone-spark>
		</IconPreview>
		<IconPreview
			v-if="'microphone-spark-fill'.includes(search) && (!page?.params?.category || config['microphone-spark-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="microphone-spark-fill"
		>
			<tap-icon-microphone-spark-fill></tap-icon-microphone-spark-fill>
		</IconPreview>
		<IconPreview
			v-if="'minus'.includes(search) && (!page?.params?.category || config['minus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="minus"
		>
			<tap-icon-minus></tap-icon-minus>
		</IconPreview>
		<IconPreview
			v-if="'minus-fill'.includes(search) && (!page?.params?.category || config['minus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="minus-fill"
		>
			<tap-icon-minus-fill></tap-icon-minus-fill>
		</IconPreview>
		<IconPreview
			v-if="'moon'.includes(search) && (!page?.params?.category || config['moon']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="moon"
		>
			<tap-icon-moon></tap-icon-moon>
		</IconPreview>
		<IconPreview
			v-if="'moon-fill'.includes(search) && (!page?.params?.category || config['moon-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="moon-fill"
		>
			<tap-icon-moon-fill></tap-icon-moon-fill>
		</IconPreview>
		<IconPreview
			v-if="'more-horizontal'.includes(search) && (!page?.params?.category || config['more-horizontal']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="more-horizontal"
		>
			<tap-icon-more-horizontal></tap-icon-more-horizontal>
		</IconPreview>
		<IconPreview
			v-if="'more-horizontal-fill'.includes(search) && (!page?.params?.category || config['more-horizontal-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="more-horizontal-fill"
		>
			<tap-icon-more-horizontal-fill></tap-icon-more-horizontal-fill>
		</IconPreview>
		<IconPreview
			v-if="'more-vertical'.includes(search) && (!page?.params?.category || config['more-vertical']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="more-vertical"
		>
			<tap-icon-more-vertical></tap-icon-more-vertical>
		</IconPreview>
		<IconPreview
			v-if="'more-vertical-fill'.includes(search) && (!page?.params?.category || config['more-vertical-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="more-vertical-fill"
		>
			<tap-icon-more-vertical-fill></tap-icon-more-vertical-fill>
		</IconPreview>
		<IconPreview
			v-if="'motorcycle'.includes(search) && (!page?.params?.category || config['motorcycle']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="motorcycle"
		>
			<tap-icon-motorcycle></tap-icon-motorcycle>
		</IconPreview>
		<IconPreview
			v-if="'pause'.includes(search) && (!page?.params?.category || config['pause']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pause"
		>
			<tap-icon-pause></tap-icon-pause>
		</IconPreview>
		<IconPreview
			v-if="'pencil-line'.includes(search) && (!page?.params?.category || config['pencil-line']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pencil-line"
		>
			<tap-icon-pencil-line></tap-icon-pencil-line>
		</IconPreview>
		<IconPreview
			v-if="'pencil-line-fill'.includes(search) && (!page?.params?.category || config['pencil-line-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pencil-line-fill"
		>
			<tap-icon-pencil-line-fill></tap-icon-pencil-line-fill>
		</IconPreview>
		<IconPreview
			v-if="'person'.includes(search) && (!page?.params?.category || config['person']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person"
		>
			<tap-icon-person></tap-icon-person>
		</IconPreview>
		<IconPreview
			v-if="'person-1'.includes(search) && (!page?.params?.category || config['person-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-1"
		>
			<tap-icon-person-1></tap-icon-person-1>
		</IconPreview>
		<IconPreview
			v-if="'person-fill'.includes(search) && (!page?.params?.category || config['person-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-fill"
		>
			<tap-icon-person-fill></tap-icon-person-fill>
		</IconPreview>
		<IconPreview
			v-if="'person-fill-1'.includes(search) && (!page?.params?.category || config['person-fill-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-fill-1"
		>
			<tap-icon-person-fill-1></tap-icon-person-fill-1>
		</IconPreview>
		<IconPreview
			v-if="'person-in-wheelchair'.includes(search) && (!page?.params?.category || config['person-in-wheelchair']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-in-wheelchair"
		>
			<tap-icon-person-in-wheelchair></tap-icon-person-in-wheelchair>
		</IconPreview>
		<IconPreview
			v-if="'person-minus'.includes(search) && (!page?.params?.category || config['person-minus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-minus"
		>
			<tap-icon-person-minus></tap-icon-person-minus>
		</IconPreview>
		<IconPreview
			v-if="'person-minus-fill'.includes(search) && (!page?.params?.category || config['person-minus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-minus-fill"
		>
			<tap-icon-person-minus-fill></tap-icon-person-minus-fill>
		</IconPreview>
		<IconPreview
			v-if="'person-plus'.includes(search) && (!page?.params?.category || config['person-plus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-plus"
		>
			<tap-icon-person-plus></tap-icon-person-plus>
		</IconPreview>
		<IconPreview
			v-if="'person-plus-fill'.includes(search) && (!page?.params?.category || config['person-plus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-plus-fill"
		>
			<tap-icon-person-plus-fill></tap-icon-person-plus-fill>
		</IconPreview>
		<IconPreview
			v-if="'person-two'.includes(search) && (!page?.params?.category || config['person-two']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-two"
		>
			<tap-icon-person-two></tap-icon-person-two>
		</IconPreview>
		<IconPreview
			v-if="'person-two-fill'.includes(search) && (!page?.params?.category || config['person-two-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-two-fill"
		>
			<tap-icon-person-two-fill></tap-icon-person-two-fill>
		</IconPreview>
		<IconPreview
			v-if="'person-wave'.includes(search) && (!page?.params?.category || config['person-wave']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-wave"
		>
			<tap-icon-person-wave></tap-icon-person-wave>
		</IconPreview>
		<IconPreview
			v-if="'person-wave-fill'.includes(search) && (!page?.params?.category || config['person-wave-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="person-wave-fill"
		>
			<tap-icon-person-wave-fill></tap-icon-person-wave-fill>
		</IconPreview>
		<IconPreview
			v-if="'phone'.includes(search) && (!page?.params?.category || config['phone']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="phone"
		>
			<tap-icon-phone></tap-icon-phone>
		</IconPreview>
		<IconPreview
			v-if="'phone-fill'.includes(search) && (!page?.params?.category || config['phone-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="phone-fill"
		>
			<tap-icon-phone-fill></tap-icon-phone-fill>
		</IconPreview>
		<IconPreview
			v-if="'phone-vibrate'.includes(search) && (!page?.params?.category || config['phone-vibrate']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="phone-vibrate"
		>
			<tap-icon-phone-vibrate></tap-icon-phone-vibrate>
		</IconPreview>
		<IconPreview
			v-if="'phone-vibrate-fill'.includes(search) && (!page?.params?.category || config['phone-vibrate-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="phone-vibrate-fill"
		>
			<tap-icon-phone-vibrate-fill></tap-icon-phone-vibrate-fill>
		</IconPreview>
		<IconPreview
			v-if="'pin'.includes(search) && (!page?.params?.category || config['pin']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin"
		>
			<tap-icon-pin></tap-icon-pin>
		</IconPreview>
		<IconPreview
			v-if="'pin-cross'.includes(search) && (!page?.params?.category || config['pin-cross']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-cross"
		>
			<tap-icon-pin-cross></tap-icon-pin-cross>
		</IconPreview>
		<IconPreview
			v-if="'pin-cross-fill'.includes(search) && (!page?.params?.category || config['pin-cross-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-cross-fill"
		>
			<tap-icon-pin-cross-fill></tap-icon-pin-cross-fill>
		</IconPreview>
		<IconPreview
			v-if="'pin-fill'.includes(search) && (!page?.params?.category || config['pin-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-fill"
		>
			<tap-icon-pin-fill></tap-icon-pin-fill>
		</IconPreview>
		<IconPreview
			v-if="'pin-on-map'.includes(search) && (!page?.params?.category || config['pin-on-map']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-on-map"
		>
			<tap-icon-pin-on-map></tap-icon-pin-on-map>
		</IconPreview>
		<IconPreview
			v-if="'pin-on-map-fill'.includes(search) && (!page?.params?.category || config['pin-on-map-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-on-map-fill"
		>
			<tap-icon-pin-on-map-fill></tap-icon-pin-on-map-fill>
		</IconPreview>
		<IconPreview
			v-if="'pin-wave'.includes(search) && (!page?.params?.category || config['pin-wave']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-wave"
		>
			<tap-icon-pin-wave></tap-icon-pin-wave>
		</IconPreview>
		<IconPreview
			v-if="'pin-wave-fill'.includes(search) && (!page?.params?.category || config['pin-wave-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="pin-wave-fill"
		>
			<tap-icon-pin-wave-fill></tap-icon-pin-wave-fill>
		</IconPreview>
		<IconPreview
			v-if="'plane'.includes(search) && (!page?.params?.category || config['plane']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="plane"
		>
			<tap-icon-plane></tap-icon-plane>
		</IconPreview>
		<IconPreview
			v-if="'plane-fill'.includes(search) && (!page?.params?.category || config['plane-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="plane-fill"
		>
			<tap-icon-plane-fill></tap-icon-plane-fill>
		</IconPreview>
		<IconPreview
			v-if="'planet-earth'.includes(search) && (!page?.params?.category || config['planet-earth']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="planet-earth"
		>
			<tap-icon-planet-earth></tap-icon-planet-earth>
		</IconPreview>
		<IconPreview
			v-if="'play'.includes(search) && (!page?.params?.category || config['play']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="play"
		>
			<tap-icon-play></tap-icon-play>
		</IconPreview>
		<IconPreview
			v-if="'plus'.includes(search) && (!page?.params?.category || config['plus']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="plus"
		>
			<tap-icon-plus></tap-icon-plus>
		</IconPreview>
		<IconPreview
			v-if="'plus-fill'.includes(search) && (!page?.params?.category || config['plus-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="plus-fill"
		>
			<tap-icon-plus-fill></tap-icon-plus-fill>
		</IconPreview>
		<IconPreview
			v-if="'point-three-connected-trianglepath-line'.includes(search) && (!page?.params?.category || config['point-three-connected-trianglepath-line']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="point-three-connected-trianglepath-line"
		>
			<tap-icon-point-three-connected-trianglepath-line></tap-icon-point-three-connected-trianglepath-line>
		</IconPreview>
		<IconPreview
			v-if="'point-three-connected-trianglepath-line-fill'.includes(search) && (!page?.params?.category || config['point-three-connected-trianglepath-line-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="point-three-connected-trianglepath-line-fill"
		>
			<tap-icon-point-three-connected-trianglepath-line-fill></tap-icon-point-three-connected-trianglepath-line-fill>
		</IconPreview>
		<IconPreview
			v-if="'power'.includes(search) && (!page?.params?.category || config['power']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="power"
		>
			<tap-icon-power></tap-icon-power>
		</IconPreview>
		<IconPreview
			v-if="'question'.includes(search) && (!page?.params?.category || config['question']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="question"
		>
			<tap-icon-question></tap-icon-question>
		</IconPreview>
		<IconPreview
			v-if="'record'.includes(search) && (!page?.params?.category || config['record']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="record"
		>
			<tap-icon-record></tap-icon-record>
		</IconPreview>
		<IconPreview
			v-if="'rectangle-person-text'.includes(search) && (!page?.params?.category || config['rectangle-person-text']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="rectangle-person-text"
		>
			<tap-icon-rectangle-person-text></tap-icon-rectangle-person-text>
		</IconPreview>
		<IconPreview
			v-if="'rectangle-person-text-with-badge'.includes(search) && (!page?.params?.category || config['rectangle-person-text-with-badge']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="rectangle-person-text-with-badge"
		>
			<tap-icon-rectangle-person-text-with-badge></tap-icon-rectangle-person-text-with-badge>
		</IconPreview>
		<IconPreview
			v-if="'send-chat'.includes(search) && (!page?.params?.category || config['send-chat']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="send-chat"
		>
			<tap-icon-send-chat></tap-icon-send-chat>
		</IconPreview>
		<IconPreview
			v-if="'send-chat-fill'.includes(search) && (!page?.params?.category || config['send-chat-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="send-chat-fill"
		>
			<tap-icon-send-chat-fill></tap-icon-send-chat-fill>
		</IconPreview>
		<IconPreview
			v-if="'share'.includes(search) && (!page?.params?.category || config['share']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="share"
		>
			<tap-icon-share></tap-icon-share>
		</IconPreview>
		<IconPreview
			v-if="'share-fill'.includes(search) && (!page?.params?.category || config['share-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="share-fill"
		>
			<tap-icon-share-fill></tap-icon-share-fill>
		</IconPreview>
		<IconPreview
			v-if="'shield-tick'.includes(search) && (!page?.params?.category || config['shield-tick']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="shield-tick"
		>
			<tap-icon-shield-tick></tap-icon-shield-tick>
		</IconPreview>
		<IconPreview
			v-if="'shield-tick-fill'.includes(search) && (!page?.params?.category || config['shield-tick-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="shield-tick-fill"
		>
			<tap-icon-shield-tick-fill></tap-icon-shield-tick-fill>
		</IconPreview>
		<IconPreview
			v-if="'shopping-bag'.includes(search) && (!page?.params?.category || config['shopping-bag']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="shopping-bag"
		>
			<tap-icon-shopping-bag></tap-icon-shopping-bag>
		</IconPreview>
		<IconPreview
			v-if="'shopping-bag-fill'.includes(search) && (!page?.params?.category || config['shopping-bag-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="shopping-bag-fill"
		>
			<tap-icon-shopping-bag-fill></tap-icon-shopping-bag-fill>
		</IconPreview>
		<IconPreview
			v-if="'shopping-cart'.includes(search) && (!page?.params?.category || config['shopping-cart']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="shopping-cart"
		>
			<tap-icon-shopping-cart></tap-icon-shopping-cart>
		</IconPreview>
		<IconPreview
			v-if="'shopping-cart-fill'.includes(search) && (!page?.params?.category || config['shopping-cart-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="shopping-cart-fill"
		>
			<tap-icon-shopping-cart-fill></tap-icon-shopping-cart-fill>
		</IconPreview>
		<IconPreview
			v-if="'single-check'.includes(search) && (!page?.params?.category || config['single-check']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="single-check"
		>
			<tap-icon-single-check></tap-icon-single-check>
		</IconPreview>
		<IconPreview
			v-if="'siren'.includes(search) && (!page?.params?.category || config['siren']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="siren"
		>
			<tap-icon-siren></tap-icon-siren>
		</IconPreview>
		<IconPreview
			v-if="'siren-fill'.includes(search) && (!page?.params?.category || config['siren-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="siren-fill"
		>
			<tap-icon-siren-fill></tap-icon-siren-fill>
		</IconPreview>
		<IconPreview
			v-if="'slider-horizontal'.includes(search) && (!page?.params?.category || config['slider-horizontal']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="slider-horizontal"
		>
			<tap-icon-slider-horizontal></tap-icon-slider-horizontal>
		</IconPreview>
		<IconPreview
			v-if="'slider-horizontal-fill'.includes(search) && (!page?.params?.category || config['slider-horizontal-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="slider-horizontal-fill"
		>
			<tap-icon-slider-horizontal-fill></tap-icon-slider-horizontal-fill>
		</IconPreview>
		<IconPreview
			v-if="'spark'.includes(search) && (!page?.params?.category || config['spark']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spark"
		>
			<tap-icon-spark></tap-icon-spark>
		</IconPreview>
		<IconPreview
			v-if="'spark-fill'.includes(search) && (!page?.params?.category || config['spark-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spark-fill"
		>
			<tap-icon-spark-fill></tap-icon-spark-fill>
		</IconPreview>
		<IconPreview
			v-if="'spark-small'.includes(search) && (!page?.params?.category || config['spark-small']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spark-small"
		>
			<tap-icon-spark-small></tap-icon-spark-small>
		</IconPreview>
		<IconPreview
			v-if="'spark-small-fill'.includes(search) && (!page?.params?.category || config['spark-small-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spark-small-fill"
		>
			<tap-icon-spark-small-fill></tap-icon-spark-small-fill>
		</IconPreview>
		<IconPreview
			v-if="'spark-three'.includes(search) && (!page?.params?.category || config['spark-three']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spark-three"
		>
			<tap-icon-spark-three></tap-icon-spark-three>
		</IconPreview>
		<IconPreview
			v-if="'spark-three-fill'.includes(search) && (!page?.params?.category || config['spark-three-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spark-three-fill"
		>
			<tap-icon-spark-three-fill></tap-icon-spark-three-fill>
		</IconPreview>
		<IconPreview
			v-if="'speaker-cross'.includes(search) && (!page?.params?.category || config['speaker-cross']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="speaker-cross"
		>
			<tap-icon-speaker-cross></tap-icon-speaker-cross>
		</IconPreview>
		<IconPreview
			v-if="'speaker-exclamation'.includes(search) && (!page?.params?.category || config['speaker-exclamation']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="speaker-exclamation"
		>
			<tap-icon-speaker-exclamation></tap-icon-speaker-exclamation>
		</IconPreview>
		<IconPreview
			v-if="'speaker-wave'.includes(search) && (!page?.params?.category || config['speaker-wave']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="speaker-wave"
		>
			<tap-icon-speaker-wave></tap-icon-speaker-wave>
		</IconPreview>
		<IconPreview
			v-if="'spiral-dot-two'.includes(search) && (!page?.params?.category || config['spiral-dot-two']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="spiral-dot-two"
		>
			<tap-icon-spiral-dot-two></tap-icon-spiral-dot-two>
		</IconPreview>
		<IconPreview
			v-if="'square-above-squares'.includes(search) && (!page?.params?.category || config['square-above-squares']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-above-squares"
		>
			<tap-icon-square-above-squares></tap-icon-square-above-squares>
		</IconPreview>
		<IconPreview
			v-if="'square-fill'.includes(search) && (!page?.params?.category || config['square-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill"
		>
			<tap-icon-square-fill></tap-icon-square-fill>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-1'.includes(search) && (!page?.params?.category || config['square-fill-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-1"
		>
			<tap-icon-square-fill-1></tap-icon-square-fill-1>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-2'.includes(search) && (!page?.params?.category || config['square-fill-2']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-2"
		>
			<tap-icon-square-fill-2></tap-icon-square-fill-2>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-3'.includes(search) && (!page?.params?.category || config['square-fill-3']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-3"
		>
			<tap-icon-square-fill-3></tap-icon-square-fill-3>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-4'.includes(search) && (!page?.params?.category || config['square-fill-4']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-4"
		>
			<tap-icon-square-fill-4></tap-icon-square-fill-4>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-5'.includes(search) && (!page?.params?.category || config['square-fill-5']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-5"
		>
			<tap-icon-square-fill-5></tap-icon-square-fill-5>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-6'.includes(search) && (!page?.params?.category || config['square-fill-6']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-6"
		>
			<tap-icon-square-fill-6></tap-icon-square-fill-6>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-7'.includes(search) && (!page?.params?.category || config['square-fill-7']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-7"
		>
			<tap-icon-square-fill-7></tap-icon-square-fill-7>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-8'.includes(search) && (!page?.params?.category || config['square-fill-8']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-8"
		>
			<tap-icon-square-fill-8></tap-icon-square-fill-8>
		</IconPreview>
		<IconPreview
			v-if="'square-fill-9'.includes(search) && (!page?.params?.category || config['square-fill-9']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-fill-9"
		>
			<tap-icon-square-fill-9></tap-icon-square-fill-9>
		</IconPreview>
		<IconPreview
			v-if="'square-four'.includes(search) && (!page?.params?.category || config['square-four']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-four"
		>
			<tap-icon-square-four></tap-icon-square-four>
		</IconPreview>
		<IconPreview
			v-if="'square-four-fill'.includes(search) && (!page?.params?.category || config['square-four-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-four-fill"
		>
			<tap-icon-square-four-fill></tap-icon-square-four-fill>
		</IconPreview>
		<IconPreview
			v-if="'square-grid'.includes(search) && (!page?.params?.category || config['square-grid']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-grid"
		>
			<tap-icon-square-grid></tap-icon-square-grid>
		</IconPreview>
		<IconPreview
			v-if="'square-grid-fill'.includes(search) && (!page?.params?.category || config['square-grid-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-grid-fill"
		>
			<tap-icon-square-grid-fill></tap-icon-square-grid-fill>
		</IconPreview>
		<IconPreview
			v-if="'square-grid-rounded'.includes(search) && (!page?.params?.category || config['square-grid-rounded']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-grid-rounded"
		>
			<tap-icon-square-grid-rounded></tap-icon-square-grid-rounded>
		</IconPreview>
		<IconPreview
			v-if="'square-grid-rounded-fill'.includes(search) && (!page?.params?.category || config['square-grid-rounded-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-grid-rounded-fill"
		>
			<tap-icon-square-grid-rounded-fill></tap-icon-square-grid-rounded-fill>
		</IconPreview>
		<IconPreview
			v-if="'square-more'.includes(search) && (!page?.params?.category || config['square-more']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-more"
		>
			<tap-icon-square-more></tap-icon-square-more>
		</IconPreview>
		<IconPreview
			v-if="'square-more-fill'.includes(search) && (!page?.params?.category || config['square-more-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-more-fill"
		>
			<tap-icon-square-more-fill></tap-icon-square-more-fill>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-1'.includes(search) && (!page?.params?.category || config['square-outline-1']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-1"
		>
			<tap-icon-square-outline-1></tap-icon-square-outline-1>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-2'.includes(search) && (!page?.params?.category || config['square-outline-2']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-2"
		>
			<tap-icon-square-outline-2></tap-icon-square-outline-2>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-3'.includes(search) && (!page?.params?.category || config['square-outline-3']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-3"
		>
			<tap-icon-square-outline-3></tap-icon-square-outline-3>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-4'.includes(search) && (!page?.params?.category || config['square-outline-4']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-4"
		>
			<tap-icon-square-outline-4></tap-icon-square-outline-4>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-5'.includes(search) && (!page?.params?.category || config['square-outline-5']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-5"
		>
			<tap-icon-square-outline-5></tap-icon-square-outline-5>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-6'.includes(search) && (!page?.params?.category || config['square-outline-6']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-6"
		>
			<tap-icon-square-outline-6></tap-icon-square-outline-6>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-7'.includes(search) && (!page?.params?.category || config['square-outline-7']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-7"
		>
			<tap-icon-square-outline-7></tap-icon-square-outline-7>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-8'.includes(search) && (!page?.params?.category || config['square-outline-8']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-8"
		>
			<tap-icon-square-outline-8></tap-icon-square-outline-8>
		</IconPreview>
		<IconPreview
			v-if="'square-outline-9'.includes(search) && (!page?.params?.category || config['square-outline-9']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-outline-9"
		>
			<tap-icon-square-outline-9></tap-icon-square-outline-9>
		</IconPreview>
		<IconPreview
			v-if="'square-person'.includes(search) && (!page?.params?.category || config['square-person']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-person"
		>
			<tap-icon-square-person></tap-icon-square-person>
		</IconPreview>
		<IconPreview
			v-if="'square-person-fill'.includes(search) && (!page?.params?.category || config['square-person-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="square-person-fill"
		>
			<tap-icon-square-person-fill></tap-icon-square-person-fill>
		</IconPreview>
		<IconPreview
			v-if="'star'.includes(search) && (!page?.params?.category || config['star']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="star"
		>
			<tap-icon-star></tap-icon-star>
		</IconPreview>
		<IconPreview
			v-if="'star-fill'.includes(search) && (!page?.params?.category || config['star-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="star-fill"
		>
			<tap-icon-star-fill></tap-icon-star-fill>
		</IconPreview>
		<IconPreview
			v-if="'steer'.includes(search) && (!page?.params?.category || config['steer']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="steer"
		>
			<tap-icon-steer></tap-icon-steer>
		</IconPreview>
		<IconPreview
			v-if="'steer-fill'.includes(search) && (!page?.params?.category || config['steer-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="steer-fill"
		>
			<tap-icon-steer-fill></tap-icon-steer-fill>
		</IconPreview>
		<IconPreview
			v-if="'sticky-note'.includes(search) && (!page?.params?.category || config['sticky-note']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="sticky-note"
		>
			<tap-icon-sticky-note></tap-icon-sticky-note>
		</IconPreview>
		<IconPreview
			v-if="'sticky-note-fill'.includes(search) && (!page?.params?.category || config['sticky-note-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="sticky-note-fill"
		>
			<tap-icon-sticky-note-fill></tap-icon-sticky-note-fill>
		</IconPreview>
		<IconPreview
			v-if="'store'.includes(search) && (!page?.params?.category || config['store']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="store"
		>
			<tap-icon-store></tap-icon-store>
		</IconPreview>
		<IconPreview
			v-if="'store-fill'.includes(search) && (!page?.params?.category || config['store-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="store-fill"
		>
			<tap-icon-store-fill></tap-icon-store-fill>
		</IconPreview>
		<IconPreview
			v-if="'sun'.includes(search) && (!page?.params?.category || config['sun']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="sun"
		>
			<tap-icon-sun></tap-icon-sun>
		</IconPreview>
		<IconPreview
			v-if="'sun-fill'.includes(search) && (!page?.params?.category || config['sun-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="sun-fill"
		>
			<tap-icon-sun-fill></tap-icon-sun-fill>
		</IconPreview>
		<IconPreview
			v-if="'tapsi-logo'.includes(search) && (!page?.params?.category || config['tapsi-logo']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="tapsi-logo"
		>
			<tap-icon-tapsi-logo></tap-icon-tapsi-logo>
		</IconPreview>
		<IconPreview
			v-if="'target'.includes(search) && (!page?.params?.category || config['target']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="target"
		>
			<tap-icon-target></tap-icon-target>
		</IconPreview>
		<IconPreview
			v-if="'target-fill'.includes(search) && (!page?.params?.category || config['target-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="target-fill"
		>
			<tap-icon-target-fill></tap-icon-target-fill>
		</IconPreview>
		<IconPreview
			v-if="'target-slash'.includes(search) && (!page?.params?.category || config['target-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="target-slash"
		>
			<tap-icon-target-slash></tap-icon-target-slash>
		</IconPreview>
		<IconPreview
			v-if="'telephone'.includes(search) && (!page?.params?.category || config['telephone']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="telephone"
		>
			<tap-icon-telephone></tap-icon-telephone>
		</IconPreview>
		<IconPreview
			v-if="'telephone-fill'.includes(search) && (!page?.params?.category || config['telephone-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="telephone-fill"
		>
			<tap-icon-telephone-fill></tap-icon-telephone-fill>
		</IconPreview>
		<IconPreview
			v-if="'thumb-down'.includes(search) && (!page?.params?.category || config['thumb-down']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="thumb-down"
		>
			<tap-icon-thumb-down></tap-icon-thumb-down>
		</IconPreview>
		<IconPreview
			v-if="'thumb-down-fill'.includes(search) && (!page?.params?.category || config['thumb-down-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="thumb-down-fill"
		>
			<tap-icon-thumb-down-fill></tap-icon-thumb-down-fill>
		</IconPreview>
		<IconPreview
			v-if="'thumb-up'.includes(search) && (!page?.params?.category || config['thumb-up']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="thumb-up"
		>
			<tap-icon-thumb-up></tap-icon-thumb-up>
		</IconPreview>
		<IconPreview
			v-if="'thumb-up-fill'.includes(search) && (!page?.params?.category || config['thumb-up-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="thumb-up-fill"
		>
			<tap-icon-thumb-up-fill></tap-icon-thumb-up-fill>
		</IconPreview>
		<IconPreview
			v-if="'timer'.includes(search) && (!page?.params?.category || config['timer']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="timer"
		>
			<tap-icon-timer></tap-icon-timer>
		</IconPreview>
		<IconPreview
			v-if="'timer-fill'.includes(search) && (!page?.params?.category || config['timer-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="timer-fill"
		>
			<tap-icon-timer-fill></tap-icon-timer-fill>
		</IconPreview>
		<IconPreview
			v-if="'traffic-light'.includes(search) && (!page?.params?.category || config['traffic-light']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="traffic-light"
		>
			<tap-icon-traffic-light></tap-icon-traffic-light>
		</IconPreview>
		<IconPreview
			v-if="'traffic-light-fill'.includes(search) && (!page?.params?.category || config['traffic-light-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="traffic-light-fill"
		>
			<tap-icon-traffic-light-fill></tap-icon-traffic-light-fill>
		</IconPreview>
		<IconPreview
			v-if="'trash'.includes(search) && (!page?.params?.category || config['trash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="trash"
		>
			<tap-icon-trash></tap-icon-trash>
		</IconPreview>
		<IconPreview
			v-if="'trash-fill'.includes(search) && (!page?.params?.category || config['trash-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="trash-fill"
		>
			<tap-icon-trash-fill></tap-icon-trash-fill>
		</IconPreview>
		<IconPreview
			v-if="'triangle-exclamation'.includes(search) && (!page?.params?.category || config['triangle-exclamation']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="triangle-exclamation"
		>
			<tap-icon-triangle-exclamation></tap-icon-triangle-exclamation>
		</IconPreview>
		<IconPreview
			v-if="'triangle-exclamation-fill'.includes(search) && (!page?.params?.category || config['triangle-exclamation-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="triangle-exclamation-fill"
		>
			<tap-icon-triangle-exclamation-fill></tap-icon-triangle-exclamation-fill>
		</IconPreview>
		<IconPreview
			v-if="'ufo'.includes(search) && (!page?.params?.category || config['ufo']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="ufo"
		>
			<tap-icon-ufo></tap-icon-ufo>
		</IconPreview>
		<IconPreview
			v-if="'ufo-fill'.includes(search) && (!page?.params?.category || config['ufo-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="ufo-fill"
		>
			<tap-icon-ufo-fill></tap-icon-ufo-fill>
		</IconPreview>
		<IconPreview
			v-if="'video-two'.includes(search) && (!page?.params?.category || config['video-two']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="video-two"
		>
			<tap-icon-video-two></tap-icon-video-two>
		</IconPreview>
		<IconPreview
			v-if="'video-two-fill'.includes(search) && (!page?.params?.category || config['video-two-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="video-two-fill"
		>
			<tap-icon-video-two-fill></tap-icon-video-two-fill>
		</IconPreview>
		<IconPreview
			v-if="'wallet'.includes(search) && (!page?.params?.category || config['wallet']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="wallet"
		>
			<tap-icon-wallet></tap-icon-wallet>
		</IconPreview>
		<IconPreview
			v-if="'wallet-fill'.includes(search) && (!page?.params?.category || config['wallet-fill']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="wallet-fill"
		>
			<tap-icon-wallet-fill></tap-icon-wallet-fill>
		</IconPreview>
		<IconPreview
			v-if="'wallet-swap'.includes(search) && (!page?.params?.category || config['wallet-swap']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="wallet-swap"
		>
			<tap-icon-wallet-swap></tap-icon-wallet-swap>
		</IconPreview>
		<IconPreview
			v-if="'wifi'.includes(search) && (!page?.params?.category || config['wifi']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="wifi"
		>
			<tap-icon-wifi></tap-icon-wifi>
		</IconPreview>
		<IconPreview
			v-if="'wifi-slash'.includes(search) && (!page?.params?.category || config['wifi-slash']?.categories?.includes?.(page?.params?.category))"
			:select-icon=selectIcon
			title="wifi-slash"
		>
			<tap-icon-wifi-slash></tap-icon-wifi-slash>
		</IconPreview>

  </div>
</template>

<script setup>
import '../../src/lit/icons';
import IconPreview from './IconPreview.vue';
import config from '../../dist/config'
import { useData } from 'vitepress';
const { page } = useData();
defineProps({
  selectIcon: String,
  search: String,
  category: String,
})

</script>

<style scoped>
  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .control {
    position: fixed;
    top: var(--vp-nav-height);
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 256px;
    padding: 16px;
  }
</style>
