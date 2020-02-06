<template>
<div class="container" style="margin-top:100px">
    <button type="button" class="btn btn-outline-secondary" onclick="location.href=''" >Back</button>
    <p></p>
	<div class="card shadow">
		<div class="card-body">
			<h4 class="card-title">Re:Invent Messaging</h4>
			<table class="table table-hover" id='board_list'>
				<thead>
					<tr>
						<th class="text-center d-none d-md-table-cell">No</th>
						<th class="w-50">Title</th>
						<th class="text-center d-none d-md-table-cell">ID</th>
						<th class="text-center d-none d-md-table-cell">Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="text-center d-none d-md-table-cell">1</td>
						<td><a href="Files/Reinvent/Announcements At-a-Glance.pdf">Announcements At-a-Glance</a></td>
						<td class="text-center d-none d-md-table-cell">Carmela</td>
						<td class="text-center d-none d-md-table-cell">2019-11-xx</td>
						
					</tr>
				</tbody>
			</table>
			
			<div class="d-none d-md-block">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<a href="#" class="page-link">Previous</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">1</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">2</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">3</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">4</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">5</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">6</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">7</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">8</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">9</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">10</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">Next</a>
					</li>
				</ul>
			</div>
			
			<div class="d-block d-md-none">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<a href="#" class="page-link">Previous</a>
					</li>
					<li class="page-item">
						<a href="#" class="page-link">Next</a>
					</li>
				</ul>
			</div>
			
			<div class="text-right">
			    <a href="" class="btn btn-success">Move to Cart</a>
				<a href="" class="btn btn-primary">File Upload</a>
			</div>
			
		</div>
	</div>
</div>
</template>