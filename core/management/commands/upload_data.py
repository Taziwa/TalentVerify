import csv
from django.core.management.base import BaseCommand
from core.models import Company, Department, Employee

class Command(BaseCommand):
    help = 'Upload data from CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str)

    def handle(self, *args, **kwargs):
        csv_file = kwargs['csv_file']
        with open(csv_file, 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                company, created = Company.objects.get_or_create(name=row[0], registration_number=row[1], address=row[2], contact_person=row[3], contact_phone=row[4], email=row[5], number_of_employees=row[6])
                department, created = Department.objects.get_or_create(company=company, name=row[7])
                Employee.objects.create(company=company, department=department, name=row[8], employee_id=row[9], role=row[10], date_started=row[11], date_left=row[12], duties=row[13])

        self.stdout.write(self.style.SUCCESS('Data uploaded successfully'))
