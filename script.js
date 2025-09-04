from tkinter import *
top = Tk()
top.gemontry("500*500")
top.title("MY COLLEGE FORM")
label1 = Label(top,text="LINGAYAS INSTITUTE OF MANAGEMENT AND TECHNOLOGY",font("arial",16,"bold")).pack()
label2 = Label(top,text="USER NAME:",font("arial",8,"bold")fg="yellow",bg="black").place(x=20,y=80)
label3 = Label(top,text="FATHER NAME:",font("arial",8,"bold")fg="yellow",bg="black").pack(x=20,y=100)
label4 = Label(top,text="MOTHER NAME:",font("arial",8,"bold")fg="yellow",bg="black").pack(x=20,y=120)




top.mainloop()