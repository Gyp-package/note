#include <stdio.h>
int main()
{
    int num1, num2;
    printf("请输入两个整数：\n");
    scanf("%d%d", &num1, &num2);
    int sum = num1 + num2;
    printf("它们的和是：%d\n", sum);
    return 0;
}