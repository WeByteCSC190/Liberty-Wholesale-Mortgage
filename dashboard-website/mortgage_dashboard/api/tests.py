from django.test import TestCase
from datetime import datetime
from api.models import *
from .views import *
from .serializers import *

# Create your tests here.
 
class TestLead(TestCase):
   def setUp(self):
       self.lead1 = Lead(caseId=1,
           date=datetime(2022,10,16),
           fName="Test",
           lName="Leads",
           email="test@test.com",
           phone_num=9161234567
           )
       self.lead2_attributes = {   
           'caseId': '2',
           'date': '2022-10-16',
           'fName': 'Test2',
           'lName': 'Leads2',
           'creditScore': '720',
           'email': 'Test2@leads2.com',
           'phone_num': '111-222-3333'
       }
       self.serializer_data = {
           'caseId': '2',
           'date': '2022-10-16',
           'fName': 'Test2',
           'lName': 'Leads2',
           'creditScore': '720',
           'email': 'Test2@leads2.com',
           'phone_num': '111-222-3333'  
       }
       self.Lead = Lead.objects.create(**self.lead2_attributes)
       self.serializer = LeadSerializer(instance=self.Lead)
  
   # test type 1
   def testLeadresource(self):
       self.assertEquals(self.lead1.resources, None)
   def testLeadcaseId(self):
       self.assertEquals(self.lead1.caseId, 1)
   def testLeadDate(self):
       self.assertEquals(self.lead1.date, datetime(2022,10,16))
   def testLeadfName(self):
       self.assertEquals(self.lead1.fName, "Test")
   def testLeadlName(self):
       self.assertEquals(self.lead1.lName, "Leads")
   def testLeadereditScore(self):
       self.assertEqual(self.lead1.creditScore, None)
   def testLeademail(self):
       self.assertEquals(self.lead1.email, 'test@test.com')
   def testLeadphone_num(self):
       self.assertEquals(self.lead1.phone_num, 9161234567)
   def testStatus(self):
       self.assertEqual(self.lead1.status, None)
 
   # test type 2
   def test_contains_expected_fields(self):
       data = self.serializer.data
       self.assertEqual(set(data.keys()), set([
                       'caseId','date','fName','lName','creditScore','email','phone_num','status']))
 
   def test_caseId_field(self):
       data = self.serializer.data
       self.assertEqual(data['caseId'], int(self.lead2_attributes['caseId']))
 
   def test_date_field(self):
       data = self.serializer.data
       self.assertEqual(data['date'], self.lead2_attributes['date'])
 
   def test_fName_field(self):
       data = self.serializer.data
       self.assertEqual(data['fName'], self.lead2_attributes['fName'])
 
   def test_lName_field(self):
       data = self.serializer.data
       self.assertEqual(data['lName'], self.lead2_attributes['lName'])
 
   def test_creditScore_field(self):
       data = self.serializer.data
       self.assertEqual(data['creditScore'], int(self.lead2_attributes['creditScore']))
 
   def test_email_field(self):
       data = self.serializer.data
       self.assertEqual(data['email'], self.lead2_attributes['email'])
  
   def test_phone_num_field(self):
       data = self.serializer.data
       self.assertEqual(data['phone_num'], self.lead2_attributes['phone_num'])
 
   def test_newcaseId(self):
       self.serializer_data['caseId'] = 3
       serializer = LeadSerializer(data=self.serializer_data)
       serializer.is_valid()
       new_lead = serializer.save()
       new_lead.refresh_from_db()
       self.assertEqual(new_lead.caseId, int('3'))