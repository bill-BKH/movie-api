# import time



# def time_decorator(func):
#     def inner_func():
#         start = time.time()
#         func()
#         end = time.time()
#         print(round(end-start,3))
#     return inner_func


# @time_decorator
# def draw_chart():
#     time.sleep(2)
#     return 2987381297321


# def send_ad_email():
#     time.sleep(6)




# draw_chart()
    



# time_decorator(draw_chart)
# draw_chart()
# time_decorator(send_ad_email)





def say_hello(*name,**kwargs):
    for n in name:
        print('hello '+n)
    print(kwargs)

say_hello('ali','mmd',age=22,year=1990)