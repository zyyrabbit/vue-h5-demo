<template>
	<div class="comment-section">
		<div class="comment-head">
			<div class="comment-user-avatar"/>
			<div class="comment-user">
				<p class="comment-user-name">{{comment.userName || '邦里'}}</p>
				<p class="comment-user-date">{{comment.createDate | formatInEvaluation}}</p>
			</div>
			<dx-star :rating="comment.evaluationGrade/2 || 3" type="small"></dx-star>
		</div>
		<div class="comment-cont">
			<slot>{{comment.evaluationConent || '环境舒适,我都想在这里多呆一会,我家小孩也喜欢这里的老师,下次还来。'}}</slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'DxComment',
	componentName: 'DxComment',
	props: {
		item: Object
	},
	data() {
		return {
			comment: this.item || {}
		}
	}
}
</script>
<style scope lang="scss">
.comment-section{
	position: relative;
	padding: 0.3rem 0 0.5rem 0;
	color: $--common-text-font-color;
	.comment-head{
		display: flex;
		align-items: center;
		.comment-user-avatar{
			background-color: #F098BE;
			width: 0.94rem;
			height: 0.94rem;
			border-radius: 50%;
		}
		.comment-user{
			margin-left: 0.33rem;
			flex-grow: 1;
			&-name{
				font-size: 0.36rem;
			}
			&-date{
				font-size: 0.3rem;
			}
		}
	}
	.comment-cont{
		margin-top: 0.2rem;
		font-size: 0.34rem;
	}
	&:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 0.02rem;
		border-top: 0.02rem solid #e5e5e5;
		color: #e5e5e5;
		z-index: 2;
	}	
	&:first-child {
		&:before {
			display: none;
		}
	}	
}
</style>