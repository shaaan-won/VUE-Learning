<template>
    <section id="basic-datatable">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div class="card-header border-bottom p-1">
                            <div class="head-label">
                                <h6 class="mb-0">DataTable with Buttons</h6>
                            </div>
                            <div class="dt-action-buttons text-end">
                                <div class="dt-buttons d-inline-flex"> <button
                                        class="dt-button buttons-collection btn btn-outline-secondary dropdown-toggle me-2"
                                        tabindex="0" aria-controls="DataTables_Table_0" type="button"
                                        aria-haspopup="true"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-share font-small-4 me-50">
                                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                                <polyline points="16 6 12 2 8 6"></polyline>
                                                <line x1="12" y1="2" x2="12" y2="15"></line>
                                            </svg>Export</span></button> <button
                                        class="dt-button create-new btn btn-primary" tabindex="0"
                                        aria-controls="DataTables_Table_0" type="button" data-bs-toggle="modal"
                                        data-bs-target="#modals-slide-in"><span><svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-plus me-50 font-small-4">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>Add New Record</span></button> </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mx-0 row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select
                                            name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                            class="form-select">
                                            <option value="7">7</option>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="75">75</option>
                                            <option value="100">100</option>
                                        </select> entries</label></div>
                            </div>
                            <div class="col-sm-12 col-md-6 d-flex justify-content-end">
                                <div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input
                                            type="search" class="form-control" placeholder=""
                                            aria-controls="DataTables_Table_0"></label></div>
                            </div>
                        </div>
                        <table class="datatables-basic table dataTable no-footer dtr-column collapsed"
                            id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info"
                            style="width: 100%;">
                            <thead>
                                <tr role="row">
                                    <th class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1"
                                        colspan="1" style="width: 24px;" data-col="1" aria-label="">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="checkboxSelectAll">
                                            <label class="form-check-label" for="checkboxSelectAll"></label>
                                        </div>
                                    </th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th style="display: none;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd" role="row">
                                    <td><input type="checkbox" class="form-check-input"></td>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>Admin</td>
                                    <td style="display: none;">Edit/Delete</td>
                                </tr>
                                <tr class="even" role="row">
                                    <td><input type="checkbox" class="form-check-input"></td>
                                    <td>2</td>
                                    <td>Jane Smith</td>
                                    <td>Doctor</td>
                                    <td style="display: none;">Edit/Delete</td>
                                </tr>
                                <tr class="odd" role="row">
                                    <td><input type="checkbox" class="form-check-input"></td>
                                    <td>3</td>
                                    <td>Michael Lee</td>
                                    <td>Patient</td>
                                    <td style="display: none;">Edit/Delete</td>
                                </tr>
                                <tr class="even" role="row">
                                    <td><input type="checkbox" class="form-check-input"></td>
                                    <td>4</td>
                                    <td>Sophia Brown</td>
                                    <td>Nurse</td>
                                    <td style="display: none;">Edit/Delete</td>
                                </tr>
                                <tr class="odd" role="row">
                                    <td><input type="checkbox" class="form-check-input"></td>
                                    <td>5</td>
                                    <td>Chris Evans</td>
                                    <td>Receptionist</td>
                                    <td style="display: none;">Edit/Delete</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="d-flex justify-content-between mx-0 row">
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_info" id="DataTables_Table_0_info" role="status"
                                    aria-live="polite">Showing 0 to 0 of 0 entries</div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"><a href="#"
                                                aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0"
                                                class="page-link">&nbsp;</a></li>
                                        <li class="paginate_button page-item next disabled"
                                            id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0"
                                                data-dt-idx="1" tabindex="0" class="page-link">&nbsp;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal to add new record -->
        <div class="modal modal-slide-in fade" id="modals-slide-in">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">New Record</h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        <div class="mb-1">
                            <label class="form-label" for="basic-icon-default-fullname">Full Name</label>
                            <input type="text" class="form-control dt-full-name" id="basic-icon-default-fullname"
                                placeholder="John Doe" aria-label="John Doe">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="basic-icon-default-post">Post</label>
                            <input type="text" id="basic-icon-default-post" class="form-control dt-post"
                                placeholder="Web Developer" aria-label="Web Developer">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="basic-icon-default-email">Email</label>
                            <input type="text" id="basic-icon-default-email" class="form-control dt-email"
                                placeholder="john.doe@example.com" aria-label="john.doe@example.com">
                            <small class="form-text"> You can use letters, numbers &amp; periods </small>
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="basic-icon-default-date">Joining Date</label>
                            <input type="text" class="form-control dt-date flatpickr-input" id="basic-icon-default-date"
                                placeholder="MM/DD/YYYY" aria-label="MM/DD/YYYY" data-date-format="m/d/Y">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="basic-icon-default-salary">Salary</label>
                            <input type="text" id="basic-icon-default-salary" class="form-control dt-salary"
                                placeholder="$12000" aria-label="$12000">
                        </div>
                        <button type="button"
                            class="btn btn-primary data-submit me-1 waves-effect waves-float waves-light">Submit</button>
                        <button type="reset" class="btn btn-outline-secondary waves-effect"
                            data-bs-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style></style>