from django.urls import path
from api import views

urlpatterns = [
    path('studentuser/',views.StudentUserAPIView.as_view()),
    path('studentuser/<int:pk>/',views.StudentUserAPIView.as_view()),
    path('facultyuser/',views.FacultyUserAPIView.as_view()),
    path('facultyuser/<int:pk>/',views.FacultyUserAPIView.as_view()),
    path('adminuser/',views.AdminUserAPIView.as_view()),
    path('postedjob/',views.PostedJobAPIView.as_view()),
    path('postedjob/<int:pk>/',views.PostedJobAPIView.as_view()),
    path('departmentpostedjob/<str:department>/',views.DepartmentPostedJobAPIView.as_view()),
    path('mypostedjob/<int:userid>/',views.MyPostedJobAPIView.as_view()),
    path('updatepostedjob/',views.UpdatePostedJobAPIView.as_view()),
    path('recruitment/',views.RecruitmentAPIView.as_view()),
    path('recruitment/<int:pk>',views.RecruitmentAPIView.as_view()),
    path('recruitmentdept/<str:department>/',views.RecruitmentDeptAPIView.as_view()),
    path('recruitmentshow/<str:type>',views.RecruitmentShowAPIView.as_view()),
    path('facultyapplication/',views.FacultyApplicationAPIView.as_view()),
    path('facultyapplicationdept/<str:department>',views.FacultyApplicationDeptAPIView.as_view()),
    path('studentapplicationdept/<str:department>',views.StudentApplicationDeptAPIView.as_view()),
    path('myfacultyapplication/<str:email>',views.MyFacultyApplicationAPIView.as_view()),
    path('mystudentapplication/<int:sid>/',views.MyStudentApplicationAPIView.as_view()),
    path('facultysearch/<str:fullname>/',views.FacultySearchAPIView.as_view()),
    path('coursesearch/<str:coursename>',views.CourseSearchAPIView.as_view()),
    path('sectionsearch/<str:coursename>/<str:courseid>/<str:department>/<str:type>/',views.SectionSearchAPIView.as_view()),
    path('facultyapply/<str:department>/<str:type>/<str:trimester>',views.FacultyApplyAPIView.as_view()),
    path('studentapply/<str:department>/<str:type>/',views.StudentApplyAPIView.as_view()),
    path('facultycreateapplication/',views.FacultyCreateApplicationAPIView.as_view()),
    path('studentcreateapplication/',views.StudentCreateApplicationAPIView.as_view()),
    path('studentcreaterecommendation/',views.StudentCreateRecommendationAPIView.as_view()),
    path('recommendation/<int:fid>/',views.RecommendationAPIView.as_view()),
    path('recommendationok/<int:aid>/<int:id>/',views.RecommendationokAPIView.as_view()),
    path('recommendationcancel/<int:aid>/<int:id>/',views.RecommendationcancelAPIView.as_view()),
    path('recommendationedit/<int:id>/',views.RecommendationeditAPIView.as_view()),
    path('studentapplicationdelete/<int:id>/',views.StudentApplicationDeleteAPIView.as_view()),
    path('facultyapplicationdelete/<int:id>/',views.FacultyApplicationDeleteAPIView.as_view()),
    path('studentapplicationsearch/<str:name>/',views.StudentApplicationSearchAPIView.as_view()),
    path('facultyapplicationsearch/<str:name>/',views.FacultyApplicationSearchAPIView.as_view()),
    path('studentapplicationselect/<int:id>/',views.StudentApplicationSelectAPIView.as_view()),
    path('studentapplicationselectin/<int:id>/',views.StudentApplicationSelectInAPIView.as_view()),
    path('studentapplicationview/<int:id>/',views.StudentApplicationViewAPIView.as_view()),
    path('studentapplicationselectsearch/<int:id>/<str:name>/',views.StudentApplicationSelectSearchAPIView.as_view()),
    path('assistant/<str:department>/<str:type>/',views.AssistantAPIView.as_view()),
    path('assistantsearch/<str:department>/<str:type>/<str:name>/',views.AssistantSearchAPIView.as_view()),
    path('assistantremove/<int:id>/',views.AssistantRemoveAPIView.as_view()),
    path('myassociation/<int:id>/',views.MyAssociationAPIView.as_view()),
    path('myassociationfaculty/<str:email>/',views.MyAssociationFacultyAPIView.as_view()),
    path('createtask/',views.CreateTaskAPIView.as_view()),
    path('updatetask/',views.UpdateTaskAPIView.as_view()),
    path('taskview/<int:tid>/<str:status>/',views.TaskViewAPIView.as_view()),
    path('taskdelete/<int:id>/',views.TaskDeleteAPIView.as_view()),
    path('subview/<int:id>/',views.SubViewAPIView.as_view()),
    path('createsub/',views.CreateSubAPIView.as_view()),
    path('updatefeedback/',views.UpdateFeedbackAPIView.as_view()),
    path('subdelete/<int:id>/',views.SubDeleteAPIView.as_view()),
    path('findassistant/<str:department>/<str:type>/<str:coursename>/<str:courseid>/',views.FindAssistantAPIView.as_view()),
    path('skillsearch/<str:skillname>/',views.SkillSearchAPIView.as_view()),
    path('skilladd/',views.SkillAddAPIView.as_view()),
    path('myskills/<int:userid>/',views.MySkillsAPIView.as_view()),
    path('myskillsdelete/<int:id>/',views.MySkillsDeleteAPIView.as_view()),
    path('addcareer/',views.AddCareerAPIView.as_view()),
    path('removecareer/<int:id>/',views.RemoveCareerAPIView.as_view()),
    path('mycareer/<int:id>/',views.MyCareerAPIView.as_view()),
    path('uprequest/<int:id>/',views.UpRequestAPIView.as_view()),
    path('alumnirequest/<str:department>/',views.AlumniRequestAPIView.as_view()),
    path('alumni/<str:department>/',views.AlumniAPIView.as_view()),
    path('alumniapprove/<int:id>/',views.AlumniApproveAPIView.as_view()),
    path('alumniignore/<int:id>/',views.AlumniIgnoreAPIView.as_view()),
    path('company/',views.CompanyAPIView.as_view()),
    path('eventshow/<str:department>/',views.EventShowAPIView.as_view()),
    path('postevent/',views.PostEventAPIView.as_view()),
    path('deleteevent/<int:id>/',views.DeleteEventAPIView.as_view()),
    path('startinteraction/',views.StartInteractionAPIView.as_view()),
    path('interaction/<int:id>/<str:type>/',views.InteractionAPIView.as_view()),
    path('myinteraction/<int:id>/<str:type>/',views.MyInteractionAPIView.as_view()),
    path('sendmessege/',views.SendMessegeAPIView.as_view()),
    path('messeges/<int:send>/<int:receive>/<str:type>/',views.MessegesAPIView.as_view()),
    path('doreport/',views.DoReportAPIView.as_view()),  
    path('report/',views.ReportAPIView.as_view()),
    path('reportaction/<int:id>/',views.ReportActionAPIView.as_view()),
    path('reportignore/<int:id>/',views.ReportIgnoreAPIView.as_view()),
    path('reportabort/<int:id>/',views.ReportAbortAPIView.as_view()),
    path('reportsearch/<str:name>/',views.ReportSearchAPIView.as_view()),
    path('alumniuser/',views.AlumniUserAPIView.as_view()),
    path('notices/',views.NoticesAPIView.as_view()),
    path('notification/<int:id>/<str:type>/',views.NotificationAPIView.as_view()),
    path('notificationfaculty/<str:email>/<str:type>/',views.NotificationFacultyAPIView.as_view()),
    path('notificationdelete/<int:id>/',views.NotificationDeleteAPIView.as_view()),
    path('notificationdeleteall/<int:id>/<str:type>/',views.NotificationDeleteAllAPIView.as_view()),
    path('notificationdeleteallfaculty/<str:email>/<str:type>/',views.NotificationDeleteAllFacultyAPIView.as_view()),
    path('myfacultyapp/<int:id>/',views.MyFacultyAppAPIView.as_view()),
]