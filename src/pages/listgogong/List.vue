<template>
	<div>
		<gugong-Ggheader></gugong-Ggheader>
		<ticket-content></ticket-content>
		<comment-content></comment-content>
		<view-content></view-content>
 	</div>
</template>

<script>
import GgHeaderComponent from "./GgHeader";
import TicketComponent from "./Ticket";
import CommentComponent from "./Comment";
import ViewComponent from "./View";
export default {			
	components: {
				"gugong-Ggheader": GgHeaderComponent,
				"ticket-content": TicketComponent,
				"comment-content": CommentComponent,
				"view-content": ViewComponent
			}
		}

</script>


<style>

</style>

