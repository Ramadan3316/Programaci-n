import smtplib

sender = 'pythonnexample@gmail.com'
receivers = ['ramirocarnicersouble8@gmail.com']

message = """From: From Person <from@fromdomain.com>
To: To Person <to@todomain.com>
Subject: SMTP e-mail test

This is a test e-mail message.
"""

try:
   smtpObj = smtplib.SMTP('localhost')
   smtpObj.login(user="pythonnexample@gmail.com", password="rjvjltqrzdatisvu")
   smtpObj.sendmail(sender, receivers, message)    
   smtpObj.quit()     
   print ("Successfully sent email")
except:
   print ("Error: unable to send email")