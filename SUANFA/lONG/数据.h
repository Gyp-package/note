
int solve(
    const

    char

        *
            s,
    int
        l);

s和l意思如上。通过返回值返回答案。

        * /

#include
    <
        stdio.h>

    int
    solve(
        const

        char

            *
                s,
        int
            l);

int main()
{

    char
        s[] =
            "
        jfurhgyaopylhijknmbjhutyaopglhkyinjbaopfjguthfaopkbmvnchfaop
            "
        ;

    int
        l;

    //
    printf("enter characters/n");

    //
    scanf("%s", s);

    printf(
        "
        enter l /
        n
        "
    );
    scanf(
        "
            % d
            "
        ,
        &l);
    printf(
        "
            % d
            "
        ,
        solve(s, l));
    getchar();
    getchar();

    return

        0;
}

int solve(
    const

    char

        *
            s,
    int
        l)
{

    int
        max =
            1,
        c;

    int
        i,
        j, k, t = 0, lenth, take, ls, p, t1 = 0;

    //
    ls为原始字符串的长度

        int
            a[10000];

    //
    读取样本字符串的数组

    int
        count1 =
            0,
        count[10000] =
            {
                0};

    //
    count数组记录样本字符串在原字符串中出现的次数, 当其为0是表示只有一个

        int
            temp;

    for (ls =
             0;
         s[ls]; ls++)
        //
        计算原字符串长度

            ;

    for (i =
             0;
         i <=
         ls -
             l;
         i++)
        //
        此处i用来控制启示位置, ls - l表示样本字符串活动范围

        {

            for (lenth =
                     l;
                 lenth <=
                 ls -
                     i;
                 lenth++)
                //
                lenth表示样本字符串的长度

                {

                    for (take =
                             i,
                        p =
                             0;
                         take <
                         lenth +
                             i;
                         take++, p++)
                        //
                        读取起始位置为i长度为lenth的字符串

                        {
                            a[p] =
                                s[take];
                            printf(
                                "
                                    % c
                                    "
                                ,
                                a[p]);
                        }
                    printf(
                        "
                        / n
                        "
                    );
                    t1++;
                    //
                    为数组count序号

                        for (j =
                                 0;
                             j <=
                             ls -
                                 lenth;)
                        //
                        在原字符串中开始寻找一样的样本字符串

                    {

                        for (k =
                                 j,
                            p =
                                 0;
                             k <
                             lenth +
                                 j;
                             k++, p++)
                        {

                            if (a[p] ==
                                s[k])
                            {
                                count1++;
                                //
                                统计在同样长度下相同字符的个数
                            }

                            else

                            {
                                count1 =
                                    0;

                                break;
                            }
                        }

                        if (count1 == lenth)
                        //成立则表明有相同的字符串
                        {
                            t++;
                            // t为次数
                            //
                            count[t1] = t;
                            printf("t1=%d %d/n", t1, count[t1]);
                            if (t > max)
                                max = t;
                            j = j + lenth;
                            //避免出现重叠例如"ababa" 只能算出现一次"aba"
                            count1 = 0;
                        }
                        else
                            j++;
                    }
                    printf("/n");
                    t = 0; // 使次数归零  }
                }
            /*
             for (i=0;i<t1;i++)//从大到小排序
            {
                for (j=0;j<t1;j++)
                {
                    if (count[j]<count[j+1])
                    {
                        temp=count[j];
                        count[j]=count[j+1];
                        count[j+1]=temp;
                    }
                   // printf("%d",count[j]);
                }
                //printf("/n");
            }
            */
            printf("最大次数为%d/n ", max);
            return 0;
            count[0];
            //返回最大的次数
        }
